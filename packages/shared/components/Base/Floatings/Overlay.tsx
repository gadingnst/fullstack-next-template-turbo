'use client';

import { useEffect, type HTMLAttributes, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import BrowserRender from 'shared/components/base/Displays/BrowserRender';
import cn from 'shared/utils/cn';

import styles from './Overlay.module.css';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  lockBody?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Base Component to create Modal
 * See `Dialog` component for example usage
 */
function Overlay(props: PropsWithChildren<OverlayProps>) {
  const {
    show,
    children,
    lockBody = false,
    className = '',
    ...attrProps
  } = props;

  useEffect(() => {
    /** lock body scroll when overlay show */
    if (!lockBody) return;
    if (show) {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    }
  }, [lockBody, show]);

  const Component = (
    <div
      {...attrProps}
      className={cn([
        styles.overlay,
        'bg-black bg-opacity-75',
        className
      ])}
    >
      {children}
    </div>
  );

  return (
    <BrowserRender>
      {show ? createPortal(Component, document.body) : null}
    </BrowserRender>
  );
}

export default Overlay;
