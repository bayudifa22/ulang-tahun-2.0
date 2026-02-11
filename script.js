const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startMusic");
// ambil data dari localStorage
let isPlaying = localStorage.getItem("musicPlaying");
let savedTime = localStorage.getItem("musicTime");

// lanjutkan dari detik terakhir
if (savedTime) {
  music.currentTime = parseFloat(savedTime);
}

// kalau status playing → langsung play
if (isPlaying === "true") {
  music.play();
  if (musicBtn) musicBtn.innerText = "⏸ Pause Music";
}

// simpan waktu lagu setiap 1 detik
setInterval(() => {
  if (!music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
}, 1000);

// tombol play / pause
if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      localStorage.setItem("musicPlaying", "true");
      musicBtn.innerText = "⏸ Pause Music";
    } else {
      music.pause();
      localStorage.setItem("musicPlaying", "false");
      musicBtn.innerText = "▶ Play Music";
    }
  });
}

// mulai musik saat klik Scroll Down
if (startBtn) {
  startBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      localStorage.setItem("musicPlaying", "true");
      if (musicBtn) musicBtn.innerText = "⏸ Pause Music";
    }
  });
}

let needUserGesture = false;

// jika sebelumnya musik playing
if (localStorage.getItem("musicPlaying") === "true") {
  needUserGesture = true;
}

// tunggu interaksi user
document.addEventListener("click", () => {
  if (needUserGesture && music.paused) {
    music.play();
    needUserGesture = false;
  }
}, { once: true });

// tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();
