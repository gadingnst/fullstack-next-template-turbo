import { FunctionComponent } from 'react';
import Link from 'next/link';
import Button, { Props as ButtonProps } from '@shared/components/base/Buttons/Button';
import clsxm from '@shared/utils/clsxm';

export interface Props extends ButtonProps {
  href: string;
  block?: boolean;
}

export const ButtonLink: FunctionComponent<Props> = (props) => {
  const {
    href,
    disabled,
    block = false,
    ...otherProps
  } = props;

  const ButtonComponent = <Button block={block} {...otherProps} />;

  if (disabled || !href) {
    return ButtonComponent;
  }

  return (
    <Link
      href={href}
      className={clsxm([
        block ? 'w-full' : ''
      ])}
    >
      {ButtonComponent}
    </Link>
  );
};

export default ButtonLink;
