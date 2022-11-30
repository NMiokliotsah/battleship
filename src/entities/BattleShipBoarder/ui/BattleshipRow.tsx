import React from "react";
import BattleShipCell from "./BattleShipCell";

import style from './BattleShipBoarder.module.scss';

interface IBattleshipRow {
  row: Array<number | string>,
  handleOnClick: Function,
}

function BattleshipRow({ row, handleOnClick }: IBattleshipRow) {
  return <div className={style.row}>
    {row.map((state, index) => {
      return <BattleShipCell
        key={index}
        state={state}
        setHitShip={handleOnClick} />
    })}
  </div>
}

export default React.memo(BattleshipRow);
