document.addEventListener("DOMContentLoaded", function () {
  const ucapan = document.getElementById("ucapan");
  ucapan.textContent = "Thanks to youu 💖";

  const input = document.getElementById('kodeInput');
  const button = document.getElementById('startBtn');

  const validCode = 'nika'; // Ganti sesuai kode kamu
  let isCorrect = false;

  input.addEventListener('input', () => {
    if (input.value.trim().toLowerCase() === validCode) {
      isCorrect = true;
      button.style.position = 'static'; // kembali ke posisi normal
      button.style.left = '0px';
      button.style.top = '0px';
      button.style.transition = 'none';
    } else {
      isCorrect = false;
    }
  });

  button.addEventListener('mouseenter', (e) => {
    if (!isCorrect) {
      const offsetX = Math.floor(Math.random() * 190) - 60;
      const offsetY = Math.floor(Math.random() * 200) - 30;
      button.style.position = 'relative';
      button.style.left = offsetX + 'px';
      button.style.top = offsetY + 'px';
      button.style.transition = 'all 0.1s ease';
    }
  });

  button.addEventListener('click', (e) => {
    if (!isCorrect) {
      e.preventDefault();
      alert("Masukkan kode yang benar dulu ya 😜");
    } else {
      window.location.href = 'page2.html';
    }
  });
});
