import React, { ReactNode, useEffect, useRef, useState } from "react";

interface EnhancedLazyLoadInViewProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  loadComplete?: boolean; // Force complete loading
}

const EnhancedLazyLoadInView: React.FC<EnhancedLazyLoadInViewProps> = ({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = "50px",
  className = "",
  loadComplete = false,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoaded(true), 100);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  if (loadComplete) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <>
          {children}
          {!isLoaded && fallback}
        </>
      ) : (
        fallback
      )}
    </div>
  );
};

export default EnhancedLazyLoadInView;
