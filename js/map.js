chicago = {lat: 41.8781, lng: -87.6298};

function initMap() {
  // The location of Chicago
  chicago = {lat: 41.8781, lng: -87.6298};
  // The map, centered at Chicago
  window.map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: chicago});
  // The marker, positioned at Chicago
  var marker = new google.maps.Marker({position: chicago, map: map});
}
