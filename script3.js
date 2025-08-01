function showEndingCredits(longtext) {
  const endingPage = document.getElementById("endingPage");
  const creditRoll = document.getElementById("creditRoll");

  // Tambahkan teks longtext ke dalam kontainer
  creditRoll.innerHTML = `
    <h1>🎬 Terima Kasih Telah Menyimak 🎬</h1>
    <p>${longtext}</p>
    <br><br><br>
    <p style="font-size:2em;">~ Tamat ~</p>
  `;

  endingPage.classList.remove("hidden");

  // Sembunyikan otomatis setelah animasi selesai (40s)
  setTimeout(() => {
    endingPage.classList.add("hidden");
  }, 40000); // sama durasi animasi scrollUp
}
