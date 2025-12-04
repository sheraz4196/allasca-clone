import { useEffect, useRef, useState } from 'react';

interface CalendlyWidgetProps {
  id?: string;
}

// Global flag to prevent loading Calendly script multiple times
let calendlyScriptLoaded = false;
let calendlyStylesLoaded = false;

const CalendlyWidget = ({ id }: CalendlyWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ensureCalendlyStyles = () => {
      if (calendlyStylesLoaded) return;
      const existing = document.querySelector('link[href*="assets.calendly.com/assets/external/widget.css"]') as HTMLLinkElement | null;
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.onload = () => { calendlyStylesLoaded = true; };
        link.onerror = () => { /* style load failure shouldn’t block widget */ };
        document.head.appendChild(link);
      } else {
        calendlyStylesLoaded = true;
      }
    };

    const ensureCalendlyScript = () => {
      if (!calendlyScriptLoaded && !window.Calendly) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          calendlyScriptLoaded = true;
          setIsLoading(false);
          if (window.Calendly?.initInlineWidgets) {
            window.Calendly.initInlineWidgets();
          }
        };
        script.onerror = () => {
          setIsLoading(false);
          setError('Calendly failed to load. Please try again or use the contact form.');
          console.error('Failed to load Calendly widget');
        };
        document.head.appendChild(script);
      } else {
        setIsLoading(false);
        if (window.Calendly?.initInlineWidgets) {
          window.Calendly.initInlineWidgets();
        }
      }
    };

    ensureCalendlyStyles();
    ensureCalendlyScript();

    // Failsafe: if script loaded but no init within 3s, show minimal error
    const timeout = setTimeout(() => {
      if (!window.Calendly) {
        setIsLoading(false);
        setError('Calendly is taking longer than expected to load. Please try again or use the contact form.');
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={containerRef} id={id || 'calendly-widget'} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg overflow-hidden w-full" data-testid="calendly-embed-widget">
      {error ? (
        <div className="p-4 text-sm text-red-600">{error}</div>
      ) : (
        <div
          className={`calendly-inline-widget w-full transition-opacity duration-300 ${isLoading ? 'opacity-0 absolute' : 'opacity-100'}`}
          data-url="https://calendly.com/allcasa12allcasa/schedule-your-project-consultation"
          style={{ minWidth: '320px', height: '700px', overflow: 'hidden', width: '100%' }}
        />
      )}
      {isLoading && !error && (
        <div className="animate-pulse space-y-4" aria-hidden>
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-64 bg-gray-100 rounded w-full" />
        </div>
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
