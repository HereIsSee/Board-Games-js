import React, { useState, useReducer } from 'react';
import './App.css';
import './styles/button.css';
import './styles/dark.css';
import AppContext from './contexts/Context';
import { reducer } from './reducer/reducer';
import { initGameState } from './constant';
import Board from './components/Board/Board';

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setShowModal(false);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoBack = () => {
    setIsPlaying(false);
    setSelectedGame(null);
  };

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="App">
        {isPlaying ? (
          <Board onGoBack={handleGoBack} />
        ) : (
          <button className="landing-button" id="play-button" onClick={handlePlayClick}>Play</button>
        )}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Choose a Game</h2>
              <button className="game-option" onClick={() => handleGameSelect('Chess')}>Chess</button>
              <button className="game-option" onClick={() => handleGameSelect('Checkers')}>Checkers</button>
              <button className="game-option" onClick={() => handleGameSelect('Random')}>Random</button>
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
