
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("postModal");
  const openBtn = document.getElementById("openModal");
  const subModal = document.getElementById("subModal");
  const openSubModalBtn = document.getElementById("openSubModal");
  const closeSubModalBtn = document.getElementById("closeSubModal");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
      if (e.target === subModal) {
        subModal.style.display = "none";
      }
    });
  }

  if (openSubModalBtn && subModal) {
    openSubModalBtn.addEventListener("click", () => {
      subModal.style.display = "flex";
    });
  }

  if (closeSubModalBtn) {
    closeSubModalBtn.addEventListener("click", () => {
      subModal.style.display = "none";
    });
  }
});

