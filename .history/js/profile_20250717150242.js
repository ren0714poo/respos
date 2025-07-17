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

  // 「場所を追加」ボタンでサブモーダル表示
  if (openLocationBtn && locationModal) {
    openLocationBtn.addEventListener("click", () => {
      locationModal.style.display = "flex";
    });

    // 外クリックで閉じる
    window.addEventListener("click", (e) => {
      if (e.target === locationModal) {
        locationModal.style.display = "none";
      }
    });
  }

  // 閉じるボタン
  if (closeLocationBtn) {
    closeLocationBtn.addEventListener("click", () => {
      locationModal.style.display = "none";
    });
  }
});

