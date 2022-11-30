import React from 'react';
import { Hit, Miss } from '../../../shared/assets';
import cn from 'classnames';

import style from './BattleShipBoarder.module.scss';
import { useHitShip } from '../hooks';

interface IBattleShipCellProps {
  state: number | string,
  setHitShip: Function,
}

function BattleShipCell({ state, setHitShip }: IBattleShipCellProps) {
  const { isHide, handleOnClick } = useHitShip(setHitShip, state);
  const styles = cn(style.cell, { [style.nonClickable]: isHide });

  return <div onClick={handleOnClick} className={styles}>
    {isHide && <img src={typeof state === 'string' ? Hit : Miss} alt=" " />}
  </div>
}

export default React.memo(BattleShipCell);
