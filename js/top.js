function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.7056977, lng: 135.5022748 },
    zoom: 11,
    mapTypeId: 'satellite',
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit.station",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
    ]
  });

  // 投稿モーダルの制御
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
}

initMap();
