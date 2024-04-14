// constant.js
import { createPositionChess, createPositionChessRandom, createPositionCheckers } from "./helper";
export const Status = { 
  'ongoing' : 'Ongoing',
  'promotion' : 'Promotion',
  'white' : 'white wins',
  'black' : 'black wins'
}
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
    candidateMoves: [],
    status : Status.ongoing,
    promotionSquare : null
  };
};
