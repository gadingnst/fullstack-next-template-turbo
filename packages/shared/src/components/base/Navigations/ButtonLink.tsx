'use client';

import { FunctionComponent, HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import Button, { Props as ButtonProps } from '@shared/components/base/Buttons/Button';
import cxm from '@shared/utils/cxm';

export interface Props extends ButtonProps {
  href: string;
  block?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const ButtonLink: FunctionComponent<Props> = (props) => {
  const {
    href,
    disabled,
    block = false,
    ...otherProps
  } = props;

  const Content = <Button {...otherProps} block={block} disabled={disabled} />;

  if (disabled || !href) {
    return Content;
  }

  return (
    <Link
      href={href}
      className={cxm([
        block ? 'w-full' : ''
      ])}
    >
      {Content}
    </Link>
  );
};

export default ButtonLink;
