import { FunctionComponent, Fragment, PropsWithChildren } from 'react';
import NextHead from 'next/head';
import cxm from '@shared/utils/cxm';
import { NextPageComponent } from '@shared/types/global';

export interface LayoutConfigProps {
  title?: string;
  className?: string;
}

export type UnknownProps = Record<string, any>;

export const MainLayoutPage: FunctionComponent<PropsWithChildren<LayoutConfigProps>> = (props) => {
  const {
    title,
    children,
    className
  } = props;
  return (
    <Fragment>
      {title && <NextHead><title>{title}</title></NextHead>}
      <div className={cxm(['flex flex-col min-h-screen', className])}>
        {children}
      </div>
    </Fragment>
  );
};

/**
 * Higher-order component that wraps the provided component in a `<MainLayoutPage>` component.
 * Of course, you can create your new Layout with this template!
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export const withMainLayoutPage = <T extends UnknownProps>(PageComponent: NextPageComponent<T>, layoutProps?: LayoutConfigProps|((pageProps: T) => LayoutConfigProps)) => {
  const LayoutPage: FunctionComponent<T> = (pageProps) => {
    const layoutWithPageProps = typeof layoutProps === 'function'
      ? layoutProps(pageProps) : layoutProps;
    return (
      <MainLayoutPage {...layoutWithPageProps}>
        <PageComponent {...pageProps} />
      </MainLayoutPage>
    );
  };
  return LayoutPage;
};

export default MainLayoutPage;
