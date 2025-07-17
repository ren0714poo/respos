document.addEventListener("DOMContentLoaded", () => {
  const postModal = document.getElementById("postModal");
  const openBtn = document.getElementById("openModal");

  const locationModal = document.getElementById("locationModal");
  const openLocationBtn = document.getElementById("openLocationModal");
  const closeLocationBtn = document.getElementById("closeLocationModal");

  const uploadModal = document.getElementById("uploadModal");
  const openUploadBtn = document.getElementById("openUploadModal");
  const closeUploadBtn = document.getElementById("closeUploadModal");
  const uploadInput = document.getElementById("uploadInput");
  const previewArea = document.getElementById("previewArea");

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

  if (closeLocationBtn) {
    closeLocationBtn.addEventListener("click", () => {
      locationModal.style.display = "none";
    });
  }

  // 「写真をアップロードする」クリックでアップロードモーダル表示
  if (openUploadBtn && uploadModal) {
    openUploadBtn.addEventListener("click", () => {
      uploadModal.style.display = "flex";
    });

    window.addEventListener("click", (e) => {
      if (e.target === uploadModal) {
        uploadModal.style.display = "none";
      }
    });
  }

  // 閉じるボタン
  if (closeUploadBtn) {
    closeUploadBtn.addEventListener("click", () => {
      uploadModal.style.display = "none";
    });
  }

  // アップロード画像のプレビュー表示
  if (uploadInput && previewArea) {
    uploadInput.addEventListener("change", () => {
      const file = uploadInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewArea.innerHTML = `<img src="${e.target.result}" alt="プレビュー画像">`;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
