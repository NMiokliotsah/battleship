import { useState } from 'react';

export function useHitShip(setHitShip: Function, state: string | number) {
  const [isHide, setImgState] = useState(false);

  const handleOnClick = () => {
    if (!isHide) {
      setImgState(true);
    }

    setHitShip.bind(null, state)();
  }

  return { isHide, handleOnClick };
}