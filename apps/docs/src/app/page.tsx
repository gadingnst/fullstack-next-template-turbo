'use client';

import Button from '@shared/components/base/Buttons/Button';
import { withMobileLayoutPage } from '@shared/components/layouts/page/Mobile';

function Page() {
  return (
    <>
      <h1 className="my-5 text-center text-2xl">
        My Docs
      </h1>
      <Button onClick={() => window.alert('Boop')} />
    </>
  );
}

export default withMobileLayoutPage(Page, {
  classNameMobile: 'shadow-yellow-500 px-3'
});
