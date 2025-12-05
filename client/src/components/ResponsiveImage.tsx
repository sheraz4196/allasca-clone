import { memo } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  responsiveWidths?: number[];
  quality?: number;
  fetchpriority?: 'high' | 'low' | 'auto';
}

const DEFAULT_WIDTHS = [360, 640, 768, 1024, 1360];

const appendParams = (src: string, width: number, quality: number) => {
  if (!src.startsWith('http')) return src;
  try {
    const url = new URL(src);
    url.searchParams.set('w', String(width));
    url.searchParams.set('q', String(quality));
    if (!url.searchParams.has('auto')) {
      url.searchParams.set('auto', 'format');
    }
    if (!url.searchParams.has('fit')) {
      url.searchParams.set('fit', 'crop');
    }
    return url.toString();
  } catch (error) {
    return src;
  }
};

const buildSrcSet = (src: string, widths: number[], quality: number) => {
  if (!src.startsWith('http')) return undefined;
  const uniqueWidths = Array.from(new Set(widths)).sort((a, b) => a - b);
  return uniqueWidths.map((w) => `${appendParams(src, w, quality)} ${w}w`).join(', ');
};

const ResponsiveImage = memo(({
  src,
  alt,
  className,
  priority = false,
  responsiveWidths = DEFAULT_WIDTHS,
  quality = 70,
  sizes = '100vw',
  loading,
  fetchpriority,
  decoding,
  ...rest
}: ResponsiveImageProps) => {
  const finalLoading = loading ?? (priority ? 'eager' : 'lazy');
  const finalFetchPriority = fetchpriority ?? (priority ? 'high' : 'auto');
  const finalDecoding = decoding ?? (priority ? 'sync' : 'async');
  const srcSet = buildSrcSet(src, responsiveWidths, quality);
  const largestWidth = Math.max(...responsiveWidths);
  const fallbackSrc = src.startsWith('http') ? appendParams(src, largestWidth, quality) : src;

  return (
    <img
      src={fallbackSrc}
      alt={alt}
      className={className}
      loading={finalLoading}
      decoding={finalDecoding}
      fetchpriority={finalFetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      {...rest}
    />
  );
});

ResponsiveImage.displayName = 'ResponsiveImage';

export default ResponsiveImage;
