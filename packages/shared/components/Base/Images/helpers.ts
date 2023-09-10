'use client';

import { useMemo } from 'react';

interface SizeParams {
  width?: string|number;
  height?: string|number;
}

export const DEFAULT_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

export const useSize = (size: string|number|undefined, { width, height }: SizeParams) => useMemo(() => ({
  width: width || size || '',
  height: height || size || ''
}), [height, width, size]);
