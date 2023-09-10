import type { HTMLAttributeAnchorTarget } from 'react';

// eslint-disable-next-line import/no-named-as-default
import Button, { type ButtonProps } from 'shared/components/base/Buttons/Button';
import NextLink from 'shared/components/base/Navigations/NextLink';
import cn from 'shared/utils/cn';

export interface ButtonLinkProps extends ButtonProps {
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

export function ButtonLink(props: ButtonLinkProps) {
  const {
    href,
    target,
    disabled,
    className,
    block = false,
    children,
    text,
    ...otherProps
  } = props;

  if (disabled || !href) {
    return (
      <Button
        {...otherProps}
        block={block}
        className={className}
        disabled={disabled}
      >
        {children || text}
      </Button>
    );
  }

  return (
    <NextLink
      className={cn([
        'bg-blue-500 text-white py-2 px-4 rounded-lg',
        'text-center relative',
        'hover:underline underline-offset-4 decoration-dashed',
        block && 'w-full',
        className
      ])}
      disabled={disabled}
      href={href}
      target={target}
    >
      {children || text}
    </NextLink>
  );
};

export default ButtonLink;
