/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import type { ImageProps } from 'next/image';
import { type ReactEventHandler, useCallback, useMemo, useState } from 'react';
import { type LazyLoadImageProps, LazyLoadImage } from 'react-lazy-load-image-component';

import useUpdated from 'shared/hooks/useUpdated';
import cn from 'shared/utils/cn';

import { DEFAULT_PLACEHOLDER, useSize } from './helpers';
import styles from './Image.module.css';

type Props = LazyLoadImageProps & {
  src: ImageProps['src'];
  effect?: 'blur'|'opacity';
  size?: string|number;
  onClick?: () => void;
};

function Image(props: Props) {
  const {
    src,
    effect = 'opacity',
    size,
    style = {},
    className = '',
    wrapperClassName,
    placeholderSrc,
    onError,
    onClick = () => void 0,
    ...lazyloadProps
  } = props;

  const imgSrc = useMemo(() => (
    (src as any)?.src ?? src ?? placeholderSrc ?? DEFAULT_PLACEHOLDER
  ), [src, placeholderSrc]);

  const blurDataURL = (src as any)?.blurDataURL;
  const [source, setSource] = useState<string>(imgSrc);

  const placeholder = useMemo(() => {
    const placeholderDefault = blurDataURL ?? DEFAULT_PLACEHOLDER;
    return (!placeholderSrc || placeholderSrc === source) ? placeholderDefault : placeholderSrc;
  }, [source, placeholderSrc, blurDataURL]);

  const { width, height } = useSize(size, {
    height: lazyloadProps.height,
    width: lazyloadProps.width
  });

  const handleError: ReactEventHandler<HTMLImageElement> = useCallback((event) => {
    setSource(placeholder);
    onError?.(event);
  }, [onError, placeholder]);

  useUpdated(() => {
    setSource(imgSrc);
  }, [imgSrc]);

  return (
    <LazyLoadImage
      decoding="async"
      loading="lazy"
      useIntersectionObserver
      {...lazyloadProps}
      className={cn([
        'object-contain',
        height ? `h-[${height}px]` : 'h-auto',
        width ? `w-[${width}px]` : 'w-auto',
        className
      ])}
      effect={effect}
      height={height}
      onClick={onClick}
      onError={handleError}
      placeholderSrc={placeholderSrc === '' ? undefined : placeholder}
      src={source}
      style={{ ...style, height, width }}
      width={width}
      wrapperClassName={cn([
        styles.wrapper,
        height ? `h-[${height}px]` : 'h-auto',
        width ? `w-[${width}px]` : 'w-auto',
        wrapperClassName
      ])}
    />
  );
};

export default Image;
