import type { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';
import Button, { type Props as ButtonProps } from '@shared/components/base/Buttons/Button';

import Link from 'next/link';
import clsxm from '@shared/utils/clsxm';

export interface Props extends ButtonProps {
  href: string;
  block?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ButtonLink: FunctionComponent<Props> = (props) => {
  const {
    href,
    disabled,
    target,
    block = false,
    ...otherProps
  } = props;

  const ButtonComponent = <Button {...otherProps} block={block} disabled={disabled} />;

  if (disabled || !href) {
    return ButtonComponent;
  }

  return (
    <Link
      href={href}
      target={target}
      className={clsxm([
        block ? 'w-full' : ''
      ])}
    >
      {ButtonComponent}
    </Link>
  );
};

export default ButtonLink;
