//Play popup logic

// Get the play button and overlay
const playButton = document.getElementById('play-button');
const gameOptionsOverlay = document.getElementById('game-options-overlay');

// Get the close button for the popup
const closeButton = document.getElementById('close-popup');

// Event listener for play button click
playButton.addEventListener('click', () => {
    // Show the overlay
    gameOptionsOverlay.style.display = 'block';
});

// Event listener for close button click
closeButton.addEventListener('click', () => {
    // Hide the overlay
    gameOptionsOverlay.style.display = 'none';
});