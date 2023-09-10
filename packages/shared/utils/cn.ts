import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsx + tailwind class merge
 * @param classes - class names
 */
function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}

export default cn;
