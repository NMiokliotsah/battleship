import BattleShipCell from "./BattleShipCell";

import style from './BattleShipBoarder.module.scss';

interface IBattleshipRow {
  row: Array<number | string>,
  handleOnClick: Function,
}

function BattleshipRow({ row, handleOnClick }: IBattleshipRow) {
  return <div className={style.row}>
    {row.map(state => {
      return <BattleShipCell state={state} handleOnClick={handleOnClick} />
    })}
  </div>
}

export default BattleshipRow;