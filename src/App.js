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
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handlePlayClick = () => {
    setShowPlayModal(true);
  };

  const handleSettingsClick = () => {
    setShowSettingsModal(true);
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setShowPlayModal(false);
    setIsPlaying(true);
    const newGameState = initializeGame(game); // Pass selected game to initializeGame
    dispatch({ type: 'INITIALIZE_GAME', payload: newGameState }); // Dispatch action to update game state
  };

  const handleClosePlayModal = () => {
    setShowPlayModal(false);
  };

  const handleCloseSettingsModal = () => {
    setShowSettingsModal(false);
  };

  const handleGoBack = () => {
    setIsPlaying(false);
    setSelectedGame(null);
  };

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="App">
        {isPlaying ? (
          <Board onGoBack={handleGoBack} onSettingsClick={handleSettingsClick} />
        ) : (
          <>
            <button className="landing-button" id="play-button" onClick={handlePlayClick}>Play</button>
            <button className="landing-button" id="settings-button" onClick={handleSettingsClick}>Settings</button>
          </>
        )}
        {showPlayModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleClosePlayModal}>&times;</span>
              <h2>Choose a Game</h2>
              <button className="game-option" onClick={() => handleGameSelect('Chess')}>Chess</button>
              <button className="game-option" onClick={() => handleGameSelect('Checkers')}>Checkers</button>
              <button className="game-option" onClick={() => handleGameSelect('Random')}>Random</button>
            </div>
          </div>
        )}
        {showSettingsModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseSettingsModal}>&times;</span>
              <h2>Settings</h2>
              {/* Add settings options here */}
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
