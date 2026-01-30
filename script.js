const btn = document.getElementById("pedoBtn");
const audio = document.getElementById("pedoAudio");

btn.addEventListener("click", () => {
  audio.currentTime = 0; // reinicia el pedo
  audio.play();
});
