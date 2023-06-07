import ButtonLink from '@shared/components/base/Buttons/ButtonLink';
import { withMobileLayoutPage } from '@shared/components/layouts/page/Mobile';

interface Props {
  name: string;
}

export const getServerSideProps = () => {
  return {
    props: {
      name: 'Gading'
    }
  };
};

function AboutPage(props: Props) {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <p className="my-2">Hello world from {props.name}</p>
      <ButtonLink target="_blank" href="https://gading.dev">
        My Website
      </ButtonLink>
      <ButtonLink className="my-2 bg-transparent border border-blue-500" href="/">
        Back to Homepage
      </ButtonLink>
    </div>
  );
}

export default withMobileLayoutPage(AboutPage, {
  classNameMobile: 'shadow-lg shadow-yellow-500'
});
