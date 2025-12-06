// components/LazyLoadInView.tsx
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface LazyLoadInViewProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

const LazyLoadInView: React.FC<LazyLoadInViewProps> = ({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = "50px",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyLoadInView;
