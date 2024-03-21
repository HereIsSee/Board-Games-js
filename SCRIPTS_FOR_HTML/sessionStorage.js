// Function to save settings to session storage
function saveSettingsToSessionStorage(style, volume) {
    sessionStorage.setItem('style', style);
    sessionStorage.setItem('volume', volume);
}

// Function to load settings from session storage
function loadSettingsFromSessionStorage() {
    const style = sessionStorage.getItem('style');
    const volume = sessionStorage.getItem('volume');
    return { style, volume };
}

// Function to apply settings to the page
function applySettings(style, volume) {
    // Apply styles
    document.body.style.backgroundColor = (style === 'dark') ? '#1f1f1f' : '#f9f9f9';
    document.body.style.color = (style === 'dark') ? '#f9f9f9' : '#000000';

    // Apply volume
    const audioPlayer = document.getElementById('audio-player'); // Example audio player element
    audioPlayer.volume = volume / 100; // Convert volume from percentage to decimal
}


// Function to handle when the user changes settings
function handleSettingsChange(newStyle, newVolume) {
    // Save the latest settings to session storage
    saveSettingsToSessionStorage(newStyle, newVolume);
}

// Function to be called when the new page loads
function onPageLoad() {
    // Load settings from session storage
    const { style, volume } = loadSettingsFromSessionStorage();
    // Apply settings to the page
    applySettings(style, volume);
}

// Example of updating settings when the user changes them
// This could be triggered by clicking buttons or using input elements
function updateSettings() {
    const newStyle = 'dark';
    const newVolume = 75;
    handleSettingsChange(newStyle, newVolume);
}
