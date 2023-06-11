import ButtonLink from '@shared/components/base/Navigations/ButtonLink';
import { withSSRProps } from '@shared/utils/NextPageRoute/SSR/SSRMiddleware';
import { withMobileLayoutPage } from '@shared/components/layouts/Pages/Mobile';

interface Props {
  name: string;
}

export const getServerSideProps = withSSRProps<Props>(async() => {
  const { maintaner } = await fetch('https://api.quran.gading.dev/')
    .then(raw => raw.json());
  return {
    props: {
      name: maintaner
    }
  };
});

function AboutPage(props: Props) {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <p className="text-center">Hello world from</p>
      <p className="text-center mb-5">{props.name}</p>
      <ButtonLink target="_blank" href="https://gading.dev">
        My Website
      </ButtonLink>
      <ButtonLink className="my-2 bg-transparent border border-blue-500" href="/">
        Back to Homepage
      </ButtonLink>
    </div>
  );
}

export default withMobileLayoutPage(AboutPage, (props) => ({
  title: `About ${props.name}`,
  classNameMobile: 'shadow-lg shadow-yellow-500'
}));
