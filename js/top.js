function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.7056977, lng: 135.5022748 }, // 大阪駅
    zoom: 11,
    mapTypeId: 'satellite',
     // 全てのラベルを非表示（地名、道路名、ランドマーク名など）
    styles: [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
            // 鉄道（線路）を非表示
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ visibility: "off" }]
      },
      // 鉄道の駅アイコンも非表示（必要に応じて）
      {
        featureType: "transit.station",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
    ]
  });


  // const marker = new google.maps.Marker({
  //   position: { lat: 34.7056977, lng: 135.5022748 },
  //   map: map,
  //   title: "中崎町",
  // });
  
}

initMap()