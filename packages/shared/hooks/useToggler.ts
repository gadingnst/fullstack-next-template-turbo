import { useCallback, useState } from 'react';

function useToggler() {
  const [isShow, setIsShow] = useState(false);

  const toggler = useCallback(() => {
    setIsShow(_current => !_current);
  }, []);

  return [isShow, toggler, setIsShow] as const;
}

export default useToggler;
