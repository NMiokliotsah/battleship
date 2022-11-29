import { useEffect, useState } from 'react';
import { HitSmall, MissSmall } from '../../../shared/assets';

export function useHitImages(positions: Array<string>, hitPosition: string, size: number) {
  const [count, setCount] = useState<number>(0);
  const [misImages, setMisImages] = useState<Array<string>>([]);
  const [damageShipImages, setDamageImages] = useState<Array<string>>([]);

  useEffect(() => {
    const position = positions.find(position => position === hitPosition);

    if (position) {
      setCount(prevValue => prevValue + 1);
    }
  }, [positions, hitPosition]);

  useEffect(() => {
    const arr: Array<string> = [];

    for (let i = 0; i < count; i++) {
      arr.push(HitSmall)
    }

    setDamageImages(arr);
  }, [count]);

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < size - count; i++) {
      arr.push(MissSmall)
    }

    setMisImages(arr);
  }, [size, count]);


  return { misImages, damageShipImages };
}