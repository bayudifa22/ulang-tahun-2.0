const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// volume rendah
music.volume = 0.3;

// autoplay attempt
document.addEventListener("click", () => {
  music.play();
}, { once: true });

// tombol play/pause
btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸";
  } else {
    music.pause();
    btn.textContent = "▶";
  }
});

// tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();
