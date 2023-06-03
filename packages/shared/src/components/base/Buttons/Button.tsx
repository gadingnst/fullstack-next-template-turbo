'use client';

import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';
import clsxm from '@shared/utils/clsxm';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  const {
    children,
    className = '',
    block = false,
    text = 'Boop',
    onClick = () => void 0,
    disabled = false,
    ...attrProps
  } = props;

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  return (
    <button
      role="button"
      {...attrProps}
      disabled={disabled}
      onClick={handleClick}
      className={clsxm([
        'bg-blue-500 text-white py-2 px-4 rounded-full',
        'text-center relative',
        block && 'w-full',
        disabled && 'opacity-60',
        className
      ])}
    >
      {children || text}
    </button>
  );
};

export default Button;
