import { useEffect, useRef, useState, type PropsWithChildren } from 'react';

interface DeferredSectionProps {
  rootMargin?: string;
  fallback?: React.ReactNode;
}

const DeferredSection = ({
  children,
  rootMargin = '200px 0px',
  fallback = null,
}: PropsWithChildren<DeferredSectionProps>) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (shouldRender) return;

    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={containerRef}>
      {shouldRender ? children : fallback}
    </div>
  );
};

export default DeferredSection;