import cn from 'shared/utils/cn';

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn([
        'h-4',
        'rounded-md',
        'bg-base-300',
        className
      ])}
    />
  );
}

export default Skeleton;
