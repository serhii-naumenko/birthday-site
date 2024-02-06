function closeAudio() {
  const audioElement = document.querySelector('.audio')
  if (audioElement) {
    audioElement.pause()
    audioElement.currentTime = 0
  }
}

window.addEventListener('beforeunload', closeAudio)
window.addEventListener('pagehide', closeAudio)