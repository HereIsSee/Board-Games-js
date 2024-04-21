// constant.js
import { createPositionChess, createPositionChessRandom, createPositionCheckers } from "./helper";
export const Status = { 
    'ongoing' : 'Ongoing',
    'promoting' : 'Promoting',
    'white' : 'White wins',
    'black' : 'Black wins',
    'stalemate' : 'Game draws due to stalemate',
    'insufficient' : 'Game draws due to insufficient material',
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
    promotionSquare : null,
    castleDirection: {
      w: 'both',
      b: 'both',
    }
  };
};
