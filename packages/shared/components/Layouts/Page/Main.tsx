import { type PropsWithChildren } from 'react';

import type { NextPageComponent } from 'shared/@types/global';
import cn from 'shared/utils/cn';

export interface LayoutConfigProps {
  className?: string;
}

export type UnknownProps = Record<string, any>;

export function MainLayoutPage(props: PropsWithChildren<LayoutConfigProps>) {
  const {
    children,
    className
  } = props;
  return (
    <div className={cn(['flex flex-col min-h-screen', className])}>
      {children}
    </div>
  );
};

/**
 * Higher-order component that wraps the provided component in a `<MainLayoutPage>` component.
 * Of course, you can create your new Layout with this template!
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export function withMainLayoutPage<T extends UnknownProps>(PageComponent: NextPageComponent<T>, layoutProps?: LayoutConfigProps) {
  function LayoutPage(pageProps: T) {
    return (
      <MainLayoutPage {...layoutProps}>
        <PageComponent {...pageProps} />
      </MainLayoutPage>
    );
  };
  return LayoutPage;
};

export default MainLayoutPage;
