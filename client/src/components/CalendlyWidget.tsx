import { useEffect, useRef } from 'react';

interface CalendlyWidgetProps {
  id?: string;
}

// Global flag to prevent loading Calendly script multiple times
let calendlyScriptLoaded = false;

const CalendlyWidget = ({ id }: CalendlyWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInitiated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only load when the widget comes into view
        if (entries[0].isIntersecting && !hasInitiated.current) {
          hasInitiated.current = true;

          // Check if script already exists globally
          if (!calendlyScriptLoaded && !window.Calendly) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.onload = () => {
              calendlyScriptLoaded = true;
              // Refresh Calendly widget after script loads
              if (window.Calendly?.initInlineWidgets) {
                window.Calendly.initInlineWidgets();
              }
            };
            document.body.appendChild(script);
          } else if (window.Calendly?.initInlineWidgets) {
            // Script already loaded, just initialize the widget
            window.Calendly.initInlineWidgets();
          }

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      id={id || 'calendly-widget'} 
      className="bg-white rounded-xl p-4 sm:p-6 shadow-lg overflow-hidden w-full" 
      data-testid="calendly-embed-widget"
    >
      <div 
        className="calendly-inline-widget w-full" 
        data-url="https://calendly.com/allcasa12allcasa/schedule-your-project-consultation"
        style={{ minWidth: '320px', height: '700px', overflow: 'hidden', width: '100%' }}
      />
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
