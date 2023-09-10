import type { PropsWithChildren } from 'react';
import { type LazyLoadComponentProps, LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';

export type Props = LazyLoadComponentProps;

/** @see https://www.npmjs.com/package/react-lazy-load-image-component#using-trackwindowscroll-hoc-to-improve-performance */
export { trackWindowScroll };

/** @see https://www.npmjs.com/package/react-lazy-load-image-component#lazyloadcomponent-usage */
function LazyLoad(props: PropsWithChildren<Props>) {
  const { children, ...otherProps } = props;
  return (
    <LazyLoadComponent {...otherProps}>
      {children}
    </LazyLoadComponent>
  );
};

export default LazyLoad;
