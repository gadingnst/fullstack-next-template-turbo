import ButtonLink from '@shared/components/base/Navigations/ButtonLink';
import { withMobileLayoutPage } from '@shared/components/layouts/Pages/Mobile';

function Homepage() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <p className="my-2">This is Homepage</p>
      <ButtonLink href="/about">
        Go To About
      </ButtonLink>
    </div>
  );
}

export default withMobileLayoutPage(Homepage, {
  title: 'Homepage | Fullstack Next Template',
  classNameMobile: 'shadow-lg shadow-yellow-500'
});
