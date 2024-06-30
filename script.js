function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 }, // Replace with your location
      zoom: 13,
    });
  
    const marker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 }, // Replace with your location
      map: map,
      title: "RESC Website",
    });
  }