import DamageStatus from '../../../shared/ui/DamageStatus';
import Ship from '../../../shared/ui/Ship';
import { useHitImages } from '../hooks/useHitImages';

import style from './ShipStatus.module.scss';

interface IShipProps {
  shipImg: string,
  size: number,
  positions: Array<string>,
  hitPosition: string,
}

function ShipInfo({ shipImg, size, positions, hitPosition }: IShipProps) {
  const { misImages, damageShipImages } = useHitImages(positions, hitPosition, size);

  return <div className={style.ship}>
    <Ship shipImg={shipImg} />
    <DamageStatus damageShipImages={damageShipImages} misImages={misImages} />
  </div>
}

export default ShipInfo;
