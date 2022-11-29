import style from './Ship.module.scss';

interface IShip {
  shipImg: string,
}

function Ship({ shipImg }: IShip) {
  return <img className={style.shipImage} src={shipImg} alt="ship" />
}

export default Ship;
