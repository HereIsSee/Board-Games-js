// constant.js
import { createPositionChess, createPositionChessRandom, createPositionCheckers } from "./helper";

export const initializeGame = (selectedGame) => {
  let position;
  switch (selectedGame) {
    case 'Chess':
      position = createPositionChess();
      break;
    case 'Checkers':
      position = createPositionCheckers();
      break;
    case 'Random':
      position = createPositionChessRandom();
      break;
    default:
      position = createPositionChess(); // Default to Chess if no valid game selected
  }

  return {
    position: [position],
    turn: 'w',
    candidateMoves: []
  };
};
