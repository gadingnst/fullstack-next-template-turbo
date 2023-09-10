import Link, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

import cn from 'shared/utils/cn';

type BaseNextLinkProps = PropsWithChildren<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
  & LinkProps
  & React.RefAttributes<HTMLAnchorElement>>;

export interface NextLinkProps extends BaseNextLinkProps {
  disabled?: boolean;
}

function NextLink(props: NextLinkProps) {
  const { disabled = false, className } = props;
  return (
    <Link
      {...props}
      className={cn([
        disabled && 'opacity-60 pointer-events-none cursor-not-allowed',
        className
      ])}
    />
  );
}

export default NextLink;
