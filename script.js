  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get("happy 1 year") || "happy 1 year";
      const elemenUcapan = document.getElementById("ucapan");
      elemenUcapan.textContent = `Semoga tahun tahun berikutnya penuh kebahagiaan dan kekuatan, ${name}! 🎉`;
    });
  </script>
