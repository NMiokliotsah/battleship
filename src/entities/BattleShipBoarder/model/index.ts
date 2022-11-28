import battleship from './battleship.json';

const defaultBoard: Array<Array<number | string>> = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export const getShipsPosition = () => {
  const layout = battleship.layout;

  return layout.map(elem => elem.positions);
}

export const getBoarder = () => {
  const positions = getShipsPosition();

  for (let i = 0; i < positions.length; i++) {
    for (let j = 0; j < positions[i].length; j++) {
      const x = positions[i][j][0];
      const y = positions[i][j][1];

      defaultBoard[x][y] = `${x}:${y}`;
    }
  }

  return defaultBoard;
}
