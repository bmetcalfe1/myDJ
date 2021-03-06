var theSong = document.getElementById("theTrack"); 
function playSong() { 
    theSong.play(); 
} 
function pauseSong() { 
    theSong.pause(); 
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  pauseSong();
  audio.currentTime = 0; // rewind to the start
  audio.play();
  audio.addEventListener("ended", function() {
    if (theSong.currentTime != 0) {
      playSong();
    }
  });
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a transform
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);