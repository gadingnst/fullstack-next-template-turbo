import clsxm from '@shared/utils/clsxm';
import Link, { type LinkProps } from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type NextLinkProps = PropsWithChildren<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
  & LinkProps
  & React.RefAttributes<HTMLAnchorElement>>;

interface Props extends NextLinkProps {
  disabled?: boolean;
}

function NextLink(props: Props) {
  const { disabled = false, className } = props;
  return (
    <Link
      className={clsxm([
        disabled && 'opacity-60',
        className
      ])}
      {...props}
    />
  );
}

export default NextLink;
