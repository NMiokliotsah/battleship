import { useState } from 'react';
import BattleShipBoarder from "../../entities/BattleShipBoarder";
import ShipStatus from '../../entities/ShipStatus/ui/ShipStatus';
import Users from '../../entities/Users';

import style from './Battleship.module.scss';

function Battleship() {
  const [hitPosition, setHitPosition] = useState('');

  const handleOnClick = (position: any, e: any) => {
    if (position) {
      setHitPosition(position);
    }
  }

  return <div className={style.battleship}>
    <BattleShipBoarder handleOnClick={handleOnClick} />
    <Users />
    <ShipStatus hitPosition={hitPosition} />
  </div>
}

export default Battleship;