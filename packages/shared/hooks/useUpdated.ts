/* eslint-disable react-hooks/exhaustive-deps */
import type { EffectCallback, DependencyList } from 'react';
import { useEffect, useRef } from 'react';

/**
 * React hooks that run useEffect() hooks only when the dependency changes,
 * not when the component is in initial mounted.
 * @param callback - The callback to run only when the dependency changes
 * @param deps - The dependencies to listen to
 */
function useUpdated(callback: EffectCallback, deps: DependencyList): void {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return callback();
    mounted.current = true;
  }, deps);
}

export default useUpdated;
