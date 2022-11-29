import ships from './battleship.json';

export const getShipsData = () => {
  return ships;
}

export const getShipsPosition = () => {
  const layout = ships.layout;

  return layout.map(elem => elem.positions);
}

export const getShipsTypes = () => {
  return ships.shipTypes;
}
