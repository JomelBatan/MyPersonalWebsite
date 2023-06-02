// Get the audio file path from the script element's data-music attribute
var scriptTag = document.currentScript;
var audioFilePath = scriptTag.getAttribute('data-music');

// Create an audio element
var audio = new Audio(audioFilePath);

// Set the scroll threshold
var scrollThreshold = 100; // Adjust this value as needed

// Boolean flag to track if the music has been played
var musicPlayed = false;

// Function to handle the scroll event
function handleScroll() {
  // Check if the music has been played and if the scroll threshold has been reached
  if (!musicPlayed && window.scrollY >= scrollThreshold) {
    audio.play(); // Play the audio
    musicPlayed = true; // Set the flag to true
  }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
