/* eslint-disable react-hooks/exhaustive-deps */
import type { EffectCallback } from 'react';
import { useEffect } from 'react';

/**
 *
 * @param callback - The callback to run when the component is mounted
 */
function useMounted(callback: EffectCallback): void {
  useEffect(callback, []);
}

export default useMounted;
