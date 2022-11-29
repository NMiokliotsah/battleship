import BattleshipRow from "./BattleshipRow";
import { getBoarder } from "../model";

import style from './BattleShipBoarder.module.scss'

const boarder = getBoarder()

interface IBattleShipBoarderProps {
  handleOnClick: Function,
}

function BattleShipBoarder({ handleOnClick }: IBattleShipBoarderProps) {
  return <div className={style.board}>
    <div className={style.wrapper}>
      <div className={style.container}>
        {boarder.map(row => {
          return <BattleshipRow row={row} handleOnClick={handleOnClick} />
        })}
      </div>
    </div>
  </div>
}

export default BattleShipBoarder;