import { useEffect, useRef, useState } from 'react';

interface CalendlyWidgetProps {
  id?: string;
}

// Global flag to prevent loading Calendly script multiple times
let calendlyScriptLoaded = false;

const CalendlyWidget = ({ id }: CalendlyWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInitiated = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only load when widget is 300px away from viewport (better UX)
        if (entries[0].isIntersecting && !hasInitiated.current) {
          hasInitiated.current = true;

          // Check if script already exists globally
          if (!calendlyScriptLoaded && !window.Calendly) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.onload = () => {
              calendlyScriptLoaded = true;
              setIsLoading(false);
              // Refresh Calendly widget after script loads
              if (window.Calendly?.initInlineWidgets) {
                window.Calendly.initInlineWidgets();
              }
            };
            script.onerror = () => {
              setIsLoading(false);
              setError('Calendly failed to load. Please try again or use the contact form.');
              console.error('Failed to load Calendly widget');
            };
            document.body.appendChild(script);
          } else if (window.Calendly?.initInlineWidgets) {
            // Script already loaded, just initialize the widget
            setIsLoading(false);
            window.Calendly.initInlineWidgets();
          }

          observer.disconnect();
        }
      },
      { 
        threshold: 0,
        rootMargin: '300px' // Load 300px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} id={id || 'calendly-widget'} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg overflow-hidden w-full" data-testid="calendly-embed-widget">
      {isLoading && (
        <div className="animate-pulse space-y-4" aria-hidden>
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-64 bg-gray-100 rounded w-full" />
        </div>
      )}
      {error ? (
        <div className="p-4 text-sm text-red-600">
          {error}
        </div>
      ) : (
        <div
          className={`calendly-inline-widget w-full transition-opacity duration-300 ${isLoading ? 'opacity-0 absolute' : 'opacity-100'}`}
          data-url="https://calendly.com/allcasa12allcasa/schedule-your-project-consultation"
          style={{ minWidth: '320px', height: '700px', overflow: 'hidden', width: '100%' }}
        />
      )}
    </div>
  );
};

// Global type declaration
declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets?: () => void;
    };
  }
}

export default CalendlyWidget;
