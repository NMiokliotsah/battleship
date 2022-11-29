import ShipInfo from "./ShipInfo";
import { getShips } from "../model";

import style from './ShipStatus.module.scss';

interface IShipStatus {
  hitPosition: string,
}

const ships = getShips();

function ShipStatus({ hitPosition }: IShipStatus) {
  return <div className={style.ships}>
    {ships.map((ship, index) => <ShipInfo
      key={index}
      hitPosition={hitPosition}
      shipImg={ship.shipImg}
      size={ship.size}
      positions={ship.positions}
    />)}
  </div>
}

export default ShipStatus;
