import { useState } from 'react';
import BattleShipBoarder from "../../entities/BattleShipBoarder";

function Battleship() {
  const [hitPosition, setHitPosition] = useState<Array<string>>([]);

  const handleOnClick = (position: any, e: any) => {
    if (position) {
      setHitPosition([...hitPosition, position]);
    }
  }

  return <div>
    <BattleShipBoarder handleOnClick={handleOnClick} />
  </div>
}

export default Battleship;