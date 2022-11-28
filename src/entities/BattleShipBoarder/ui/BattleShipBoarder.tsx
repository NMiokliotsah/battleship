import BattleshipRow from "./BattleshipRow";
import { getBoarder } from "../model";

const boarder = getBoarder()

interface IBattleShipBoarderProps {
  handleOnClick: Function,
}

function BattleShipBoarder({ handleOnClick }: IBattleShipBoarderProps) {
  return <div>
    {boarder.map(row => {
      return <BattleshipRow row={row} handleOnClick={handleOnClick} />
    })}
  </div>
}

export default BattleShipBoarder;