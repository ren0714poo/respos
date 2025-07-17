document.addEventListener("DOMContentLoaded", () => {
  const postModal = document.getElementById("postModal");
  const openBtn = document.getElementById("openModal");

  const locationModal = document.getElementById("locationModal");
  const openLocationBtn = document.getElementById("openLocationModal");
  const closeLocationBtn = document.getElementById("closeLocationModal");

  // 投稿モーダルを開く
  if (openBtn && postModal) {
    openBtn.addEventListener("click", () => {
      postModal.style.display = "flex";
    });

    window.addEventListener("click", (e) => {
      if (e.target === postModal) {
        postModal.style.display = "none";
      }
    });
  }

  // 「場所を追加」クリックでサブモーダル表示
  if (openLocationBtn && locationModal) {
    openLocationBtn.addEventListener("click", () => {
      locationModal.style.display = "flex";
    });

    window.addEventListener("click", (e) => {
      if (e.target === locationModal) {
        locationModal.style.display = "none";
      }
    });
  }

  // 閉じるボタンでサブモーダル閉じる
  if (closeLocationBtn) {
    closeLocationBtn.addEventListener("click", () => {
      locationModal.style.display = "none";
    });
  }
});
