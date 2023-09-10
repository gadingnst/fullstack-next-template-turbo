import NextTopLoader, { type NextTopLoaderProps } from 'nextjs-toploader';

function TopLoader(props: NextTopLoaderProps) {
  return (
    <NextTopLoader
      color="#2299DD"
      crawl
      crawlSpeed={200}
      easing="ease"
      height={4}
      initialPosition={0.08}
      shadow="0 0 10px #2299DD, 0 0 5px #2299DD"
      speed={200}
      {...props}
    />
  );
}

export default TopLoader;
