import { useCallback, useState } from 'react';

export function useHitShip(setHitShip: Function, state: string | number) {
  const [isHide, setImgState] = useState(false);

  const handleOnClick = useCallback(() => {
    if (!isHide) {
      setImgState(true);
    }

    setHitShip.bind(null, state)();
  }, [isHide, state, setImgState, setHitShip])

  return { isHide, handleOnClick };
}
