import Skeleton from 'shared/components/base/Loaders/Skeleton';

function ContentLoader() {
  return (
    <div className="animate-pulse">
      <Skeleton className="w-[40%]" />
      <div className="mt-5 space-y-3">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}

export default ContentLoader;
