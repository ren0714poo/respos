document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("postModal");
  const openBtn = document.getElementById("openModal");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // モーダル外クリックで閉じる
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
