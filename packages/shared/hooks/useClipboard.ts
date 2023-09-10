import { useState, useCallback } from 'react';

/**
 * custom hooks to create Copy Clipboard
 * @param value - value to copy
 */
function useClipboard(value: string, delay = 1500) {
  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = useCallback(async() => {
    if (isCopied) return;
    await window.navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, delay);
  }, [isCopied, value, delay]);

  return {
    isCopied,
    copyHandler
  };
}

export default useClipboard;
