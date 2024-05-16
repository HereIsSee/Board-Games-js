import React from 'react';
import './Board.css';
import '../../styles/button.css';
import '../../styles/dark.css';
import Ranks from './bits/Ranks';
import Files from './bits/Files';
import PiecesCheckers from '../Pieces/PiecesCheckers';
import { useAppContext } from '../../contexts/Context';
import Popup from '../Popup/Popup';
import PromotionBox from '../Popup/PromotionBox/PromotionBox'
import GameEnds from '../Popup/GameEnds/GameEnds'
import arbiter from '../../arbiter/arbiter'
import { getKingPosition } from '../../arbiter/getMoves'



const Board = ({ onGoBack, onSettingsClick }) => {

  const ranks = Array(8).fill().map((x, i) => 8 - i);
  const files = Array(8).fill().map((x, i) => i + 1);
  const { appState } = useAppContext();
  const position = appState.position[appState.position.length - 1];

  const getClassName = (i, j) => {
    let c = 'tile';
    c += (i + j) % 2 === 0 ? ' tile--dark ' : ' tile--light ';

    if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)) {
      if (position[i][j]) c += ' attacking';
      else c += ' highlight';
    }
    return c;
  };

  return (
    <div>
      <div class="container">

      <button id ="play-button" onClick={onGoBack}>Go Back</button>
      <button id ="settings-button" onClick={onSettingsClick}>Settings</button>
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

        <PiecesCheckers />

        <Files files={files} />
      </div>
    </div>
  );
};

export default Board;