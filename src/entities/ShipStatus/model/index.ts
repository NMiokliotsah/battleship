import { getShipsData, getShipsTypes } from "../../../shared/api";
import {
  AircraftShape,
  BattleshipShape,
  CarrierShape,
  CruiserShape,
  SubmarineShape,
  MissSmall,
} from '../../../shared/assets';


interface IShip {
  [key: string]: {
    size: number,
    count: number,
  }
}

interface IShipInfo {
  name: string,
  shipImg: string,
  size: number,
  positions: Array<string>
}

const getShipImage = (name: string) => {
  switch (name) {
    case 'carrier': return CarrierShape;
    case 'battleship': return BattleshipShape;
    case 'cruiser': return CruiserShape;
    case 'submarine': return SubmarineShape;
    case 'destroyer': return AircraftShape;
    default: return '';
  }
}

export const getShips = () => {
  const shipsTypes: IShip = getShipsTypes();
  const ships = getShipsData();
  const result: Array<IShipInfo> = [];

  for (let key in shipsTypes) {
    const arr = [];

    const ship = ships.layout.find(ship => ship.ship === key);
    const positions: Array<string> = ship!.positions.map(elem => `${elem[0]}:${elem[1]}`);

    result.push({ name: key, shipImg: getShipImage(key), size: shipsTypes[key].size, positions });
  }

  return result;
}
