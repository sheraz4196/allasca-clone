export const setupScrollAnimations = (): (() => void) => {
  const observers = new Map<string, IntersectionObserver>();

  const createObserver = (
    options: IntersectionObserverInit,
    callback: IntersectionObserverCallback
  ): IntersectionObserver => {
    const key = JSON.stringify(options);
    if (!observers.has(key)) {
      const observer = new IntersectionObserver(callback, options);
      observers.set(key, observer);
      return observer;
    }
    return observers.get(key)!;
  };

  const animatedElements =
    document.querySelectorAll<HTMLElement>(".animate-on-scroll");
  if (animatedElements.length > 0) {
    const mainObserver = createObserver(
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            mainObserver.unobserve(entry.target);
          }
        });
      }
    );

    requestAnimationFrame(() => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible =
          rect.top <= windowHeight &&
          rect.bottom >= 0 &&
          rect.left <= windowWidth &&
          rect.right >= 0;

        if (isVisible) {
          el.classList.add("animated");
        } else {
          mainObserver.observe(el);
        }
      });
    });
  }

  const hoverElements =
    document.querySelectorAll<HTMLElement>(".hover-animate");
  if (hoverElements.length > 0) {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("hover-animate"))
        target.classList.add("hover-active");
    };
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("hover-animate"))
        target.classList.remove("hover-active");
    };
    document.addEventListener("mouseenter", handleMouseEnter, {
      passive: true,
      capture: true,
    });
    document.addEventListener("mouseleave", handleMouseLeave, {
      passive: true,
      capture: true,
    });
  }

  const zoomElements = document.querySelectorAll<HTMLElement>(".zoom-animate");
  const fadeElements = document.querySelectorAll<HTMLElement>(".fade-animate");
  const allAnimationElements = Array.from(zoomElements).concat(
    Array.from(fadeElements)
  );

  if (allAnimationElements.length > 0) {
    const animationObserver = createObserver({ threshold: 0.5 }, (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.classList.contains("zoom-animate"))
            target.classList.add("animate-zoom");
          if (target.classList.contains("fade-animate"))
            target.classList.add("animate-fade-in");
          animationObserver.unobserve(target);
        }
      });
    });

    allAnimationElements.forEach((el) => animationObserver.observe(el));
  }

  return () => {
    observers.forEach((observer) => observer.disconnect());
    observers.clear();
  };
};
