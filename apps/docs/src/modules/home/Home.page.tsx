import ButtonLink from '@shared/components/base/Buttons/ButtonLink';
import { withMobileLayoutPage } from '@shared/components/layouts/page/Mobile';

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
  classNameMobile: 'shadow-lg shadow-yellow-500'
});
