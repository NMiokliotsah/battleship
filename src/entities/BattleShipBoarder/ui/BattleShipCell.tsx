import { useState } from 'react';
import { Hit, Miss } from '../../../shared/assets';
import cn from 'classnames';

import style from './BattleShipBoarder.module.scss';

interface IBattleShipCellProps {
  state: number | string,
  setHitShip: Function,
}

function BattleShipCell({ state, setHitShip }: IBattleShipCellProps) {
  const [isHide, setImgState] = useState(false);
  const styles = cn(style.cell, {[style.nonClickable]: isHide});

  const handleOnClick = () => {
    if (!isHide) {
      setImgState(true);
    }

    setHitShip.bind(null, state)();
  }

  return <div onClick={handleOnClick} className={styles}>
    {isHide && <img src={typeof state === 'string' ? Hit : Miss} alt=" " />}
  </div>
}

export default BattleShipCell;
