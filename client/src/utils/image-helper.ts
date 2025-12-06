export const generateSrcSet = (baseName: string): string => {
  return `/optimized/${baseName}-400w.webp 400w,
          /optimized/${baseName}-800w.webp 800w,
          /optimized/${baseName}-1200w.webp 1200w,
          /optimized/${baseName}-1600w.webp 1600w`;
};

export const getSizes = (): string => {
  return `(max-width: 640px) 100vw,
          (max-width: 768px) 90vw,
          (max-width: 1024px) 50vw,
          800px`;
};
