'use client';

import type { ImageProps } from 'next/image';
import { FunctionComponent, ReactEventHandler, useCallback, useMemo, useState } from 'react';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

import cxm from '@shared/utils/cxm';
import { DEFAULT_PLACEHOLDER, useSize } from './helpers';
import styles from './Image.module.css';

type Props = LazyLoadImageProps & {
  src: ImageProps['src'];
  effect?: 'blur'|'opacity';
  size?: string|number;
  onClick?: () => void;
};

const Image: FunctionComponent<Props> = (props) => {
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

  return (
    <LazyLoadImage
      useIntersectionObserver
      decoding="async"
      loading="lazy"
      {...lazyloadProps}
      onClick={onClick}
      effect={effect}
      src={source}
      placeholderSrc={placeholder}
      onError={handleError}
      width={width}
      height={height}
      style={style}
      className={cxm([
        'object-contain',
        className
      ])}
      wrapperClassName={cxm([
        styles.wrapper,
        wrapperClassName
      ])}
    />
  );
};

export default Image;
