import type { FC, PropsWithChildren } from 'react';
import { withMobileLayoutPage } from 'shared/components/Layouts/Page/Mobile';

const AboutLayout: FC<PropsWithChildren> = ({ children }) => children;

export default withMobileLayoutPage(AboutLayout, {
  className: 'shadow-violet-500 px-3'
});
