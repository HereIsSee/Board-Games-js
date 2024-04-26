import React from 'react';
import './Board.css';
import '../../styles/button.css';
import '../../styles/dark.css';
import Ranks from './bits/Ranks';
import Files from './bits/Files';
import Pieces from '../Pieces/Pieces';
import { useAppContext } from '../../contexts/Context';
import Popup from '../Popup/Popup';

import arbiter from '../../arbiter/arbiter'
import { getKingPosition } from '../../arbiter/getMoves'

const Board = ({ onGoBack, onSettingsClick }) => {
  const ranks = Array(8).fill().map((x, i) => 8 - i);
  const files = Array(8).fill().map((x, i) => i + 1);
  const { appState } = useAppContext();
  const position = appState.position[appState.position.length - 1];


  const checkTile = (() => {
    const isInCheck =  (arbiter.isPlayerInCheck({
        positionAfterMove : position,
        player : appState.turn
    }))

    if (isInCheck)
        return getKingPosition (position, appState.turn)

    return null
})()


  const getClassName = (i, j) => {
    let c = 'tile';
    c += (i + j) % 2 === 0 ? ' tile--dark ' : ' tile--light ';

    if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)) {
      if (position[i][j]) c += ' attacking';
      else c += ' highlight';
    }

    if (checkTile && checkTile[0] === i && checkTile[1] === j) {
      c+= 'checked'
    }

    return c;
  };

  return (
    <div>
      <div class="container">
      <button id="play-button" onClick={onGoBack}>Go Back</button>
      <button id="settings-button" onClick={onSettingsClick}>Settings</button>
      </div>
      
      
      <div className="board">
        <Ranks ranks={ranks} />

        <div className="tiles">
          {ranks.map((rank, i) =>
            files.map((file, j) => (
              <div key={file + '' + rank} className={getClassName(7 - i, j)}></div>
            ))
          )}
        </div>

        <Pieces />

        <Popup />

        <Files files={files} />
      </div>
    </div>
  );
};

export default Board;
