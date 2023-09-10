/* eslint-disable react/button-has-type */
'use client';

import { type PropsWithChildren, type ButtonHTMLAttributes, forwardRef } from 'react';

import cn from 'shared/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  block?: boolean;
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  const {
    children,
    className = '',
    block = false,
    text = '',
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
      {...attrProps}
      className={cn([
        'bg-blue-500 text-white py-2 px-4 rounded-lg',
        'disabled:cursor-not-allowed disabled:opacity-60',
        'text-center relative',
        block && 'w-full',
        className
      ])}
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
    >
      {children || text}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
