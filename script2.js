const lyrics = [
  { time: 0, text: "Tak ada kata yang cukup pas" },
  { time: 6, text: "Untuk lukiskan rasa yang luas" },
  { time: 13, text: "Tiap senyummu tenangkan badai" },
  { time: 19, text: "Tiap tatapmu buat aku damai" },
  { time: 24, text: "Aku pernah berjalan jauh" },
  { time: 29, text: "Tapi tak pernah merasa utuh" },
  { time: 35, text: "Hingga kau datang, tanpa banyak tanya" },
  { time: 40, text: "Kau jadikan aku percaya" },
  { time: 47, text: "Padamu aku pulang" },
  { time: 53, text: "Bukan ke tempat, tapi ke tenang" },
  { time: 59, text: "Kau rumah dari semua lelah" },
  { time: 63, text: "Yang kupilih, tanpa salah" },
  { time: 72, text: "Tak semua hari kita cerah" },
  { time: 78, text: "Tapi kau tetap jadi indah" },
  { time: 82, text: "Aku tak butuh sempurna" },
  { time: 86, text: "Cukup kamu… apa adanya" },
  { time: 101, text: "Padamu aku pulang" },
  { time: 107, text: "Bukan ke tempat, tapi ke tenang" },
  { time: 112, text: "Kau rumah dari semua lelah" },
  { time: 120, text: "Yang kupilih, tanpa salah" },
  { time: 126, text: "Syukurku sederhana" },
  { time: 132, text: "Memilikimu, mencintaimu" },
  { time: 137, text: "Dan dicintai dengan cara" },
  { time: 141, text: "Yang hanya kamu tahu" },
  { time: 147, text: "Padamu aku pulang" },
  { time: 150, text: "Dalam senyum, dalam diam" },
  { time: 158, text: "Kamu bukan hanya yang aku cinta" },
  { time: 163, text: "Kamu… adalah rumah" }
];

function tampilMusik() {
  const display = document.getElementById("display");
 display.innerHTML = `
  <img src="music.gif" alt="dekorasi" class="dekorasi-animasi" />
  <div id="music-player">
    <h2>🎧 Now Playing: Lagu Spesial 💕</h2>
    <audio id="audio" controls autoplay>
      <source src="4u.mp3" type="audio/mpeg">
      Browser kamu tidak mendukung audio.
    </audio>
    <div id="lyrics" class="lyrics-scroll"></div>
  </div>
`;

  const audio = document.getElementById("audio");
  const lyricsContainer = document.getElementById("lyrics");


  audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    lyrics.forEach((line) => {
      const time = parseFloat(line.getAttribute("data-time"));
      if (currentTime >= time) {
        lyrics.forEach(p => p.classList.remove("active"));
        line.classList.add("active");
        line.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // Render semua lirik
  lyrics.forEach((line, i) => {
    const p = document.createElement("p");
    p.textContent = line.text;
    p.setAttribute("id", `line-${i}`);
    lyricsContainer.appendChild(p);
  });

  // Sync lirik dengan audio
  audio.ontimeupdate = () => {
    const currentTime = audio.currentTime;
    for (let i = 0; i < lyrics.length; i++) {
      if (
        currentTime >= lyrics[i].time &&
        (i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)
      ) {
        document
          .querySelectorAll("#lyrics p")
          .forEach((el) => el.classList.remove("active"));

        const activeLine = document.getElementById(`line-${i}`);
        if (activeLine) {
          activeLine.classList.add("active");
          activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        break;
      }
    }
  };
}


function tampilVideo() {
  document.getElementById("display").innerHTML = `
    <div class="video-wrapper">
      <video controls autoplay>
        <source src="test.mp4" type="video/mp4">
        Browsermu tidak mendukung video.
      </video>
    </div>
  `;
}
function tampilGif() {
  document.getElementById("display").innerHTML = 
      `<div id="cake-box" class="cake-wrapper">
        <img id="cake-on" src="cake-on.png" alt="Kue Lilin Nyala" class="cake-img visible">
        <img id="cake-off" src="cake-off.png" alt="Kue Lilin Mati" class="cake-img">
      </div>`;

  // Tambah hujan gift
  for (let i = 0; i < 20; i++) {
    const box = document.getElementById("cake-box");
    box.style.display = "block";
    const gift = document.createElement("div");
    gift.classList.add("rain-gift");
    gift.textContent = "🎁";
    gift.style.left = Math.random() * 100 + "vw";
    gift.style.animationDuration = 2 + Math.random() * 3 + "s";
    gift.style.fontSize = 20 + Math.random() * 20 + "px";
    gift.style.color = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    document.body.appendChild(gift);

    gift.addEventListener("animationend", () => {
      gift.remove();
    });
  }

  // ⏱ Tampilkan "Tiup lilinnya" setelah 2 detik
  setTimeout(() => {
    const tiupText = document.createElement("div");
    tiupText.id = "tiupText";
    tiupText.textContent = "Tiup lilinnya 🎂";
    tiupText.classList.add("tiup-text");
    document.body.appendChild(tiupText);

    // Hilangkan tulisan setelah 2 detik
    setTimeout(() => {
      tiupText.remove();
    }, 2500);
  }, 3000);

  // Transisi setelah 6 detik
  setTimeout(() => {
    document.getElementById("cake-on").classList.remove("visible");
    document.getElementById("cake-off").classList.add("visible");
  }, 6000);

  // Confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function resetDisplay() {
  document.getElementById("display").innerHTML = `<p>Pilih menu di bawah ya 💖</p>`;
}
