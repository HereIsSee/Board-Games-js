import React, { useState, useReducer } from 'react';
import './App.css';
import './styles/button.css';
import './styles/dark.css';
import AppContext from './contexts/Context';
import { reducer } from './reducer/reducer';
import { initializeGame } from './constants';
import Board from './components/Board/Board';
import BoardCheckers from './components/Board/BoardCheckers'
import TakeBack from './components/Control/bits/TakeBack';
import MovesList from './components/Control/bits/MovesList';
import Control from './components/Control/Control';

function App() {
  const [appState, dispatch] = useReducer(reducer, initializeGame('Chess'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [takeBackVisible, setTakeBackVisible] = useState(false); 
  const [movesListVisible, setMovesListVisible] = useState(false); 

  const handlePlayClick = () => {
    setShowPlayModal(true);
     // Show TakeBack button when play button is clicked
  };

  const handleSettingsClick = () => {
    setShowSettingsModal(true);
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setShowPlayModal(false);
    setIsPlaying(true);
    const newGameState = initializeGame(game);
    dispatch({ type: 'INITIALIZE_GAME', payload: newGameState });
    setTakeBackVisible(true);
    setMovesListVisible(true);
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
    setTakeBackVisible(false); // Hide TakeBack button when going back
    setMovesListVisible(false);
  };

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="App">
        <div className="content-container">
          <div className="main-content">
            {isPlaying ? (
              selectedGame === 'Checkers' ? (
                <BoardCheckers onGoBack={handleGoBack} onSettingsClick={handleSettingsClick} />
              ) : (
                <Board onGoBack={handleGoBack} onSettingsClick={handleSettingsClick} />
              )
            ) : (
              <>
                 <div className="columnContainer">
                 <button className="landing-button" id="play-button" onClick={handlePlayClick}>Play</button>
                 <button className="landing-button" id="settings-button" onClick={handleSettingsClick}>Settings</button>

                 </div>
                
              </>
            )}
            {showPlayModal && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleClosePlayModal}>&times;</span>
                  <h2>Choose a Game</h2>
                  <button className="game-option" id="Chess" onClick={() => handleGameSelect('Chess')}>Chess</button>
                  <button className="game-option" id="Checkers" onClick={() => handleGameSelect('Checkers')}>Checkers</button>
                  <button className="game-option" id="Random" onClick={() => handleGameSelect('Random')}>Random</button>
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
          <div className="right-side">
            <Control>
              <div className="moves-control">
                {movesListVisible && <MovesList />}
                {takeBackVisible && <TakeBack />}
              </div>
            </Control>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
  
}

export default App;