//Settings popup logic

const settingsButton = document.getElementById('settings-button');
const settingsOverlay = document.getElementById('settings-overlay');

settingsButton.addEventListener('click', () => {
    settingsOverlay.style.display = 'block'; // Show the overlay
});

const closeSettingsButton = document.getElementById('close-settings');
closeSettingsButton.addEventListener('click', () => {
    settingsOverlay.style.display = 'none'; // Hide the overlay
});

function changeTheme(theme) {
    // Get the <link> element
    var linkElement = document.getElementById('theme-style');

    // Set the href attribute based on the selected theme
    if (theme === 'light') {
        linkElement.href = '../styles/light.css';
    } else if (theme === 'dark') {
        linkElement.href = '../styles/dark.css';
    }
}
