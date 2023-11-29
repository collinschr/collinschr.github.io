function handleSound() {
  // Add your code here to play a sound
  // For example, using the Web Audio API or an audio library
  // Example using Web Audio API:
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);
  oscillator.start();

  // Adjust or use any other sound-related functionality as needed
}

el.addEventListener('click', function(event) {
  if (isMarkerVisible) {
    handleSound();
  }
});