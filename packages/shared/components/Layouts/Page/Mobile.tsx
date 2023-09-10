import type { PropsWithChildren } from 'react';

import type { NextPageComponent } from 'shared/@types/global';
import cn from 'shared/utils/cn';

import {
  MainLayoutPage,
  type LayoutConfigProps,
  type UnknownProps
} from './Main';

type MobileLayoutConfigProps = LayoutConfigProps;

function MobileLayoutPage(props: PropsWithChildren<MobileLayoutConfigProps>) {
  const {
    children,
    className,
    ...layoutWithPageProps
  } = props;
  return (
    <MainLayoutPage
      {...layoutWithPageProps}
      className={cn([
        'relative max-w-[500px] mx-auto w-full flex flex-col min-h-screen shadow-xl',
        className
      ])}
    >
      {children}
    </MainLayoutPage>
  );
};

/**
 * @param PageComponent - The page component to wrap with the layout
 * @param layoutProps - The props to pass to the layout
 * @returns - NextPage
 */
export function withMobileLayoutPage<T extends UnknownProps>(PageComponent: NextPageComponent<T>, layoutProps?: MobileLayoutConfigProps) {
  function MobileLayout(pageProps: T) {
    return (
      <MobileLayoutPage {...layoutProps ?? {}}>
        <PageComponent {...pageProps} />
      </MobileLayoutPage>
    );
  };
  return MobileLayout;
};

export default MobileLayoutPage;
