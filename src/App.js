// App.js
import React, { useState, useReducer } from 'react';
import './App.css';
import './styles/button.css';
import './styles/dark.css';
import AppContext from './contexts/Context';
import { reducer } from './reducer/reducer';
import { initializeGame } from './constants'; // Updated import
import Board from './components/Board/Board';

function App() {
  const [appState, dispatch] = useReducer(reducer, initializeGame('Chess')); // Default to Chess
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
    const newGameState = initializeGame(game); // Pass selected game to initializeGame
    dispatch({ type: 'INITIALIZE_GAME', payload: newGameState }); // Dispatch action to update game state
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
