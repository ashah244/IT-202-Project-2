function initMap(nameOfDay, nameOfParks, nameofTitles) {
  //variable for holding the query
  var query = endpoint + "?";

  //counter to check if user wanted more than one filter
  var counter = 0;

  // The location of Chicago
  var chicago = {lat: 41.8781, lng: -87.6298};
  // The map, centered at Chicago
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: chicago});
  //checks if the day entered was not empty than add to the query
  if(nameOfDay !== ""){
    query = query + "day=" + nameOfDay;
    counter = counter + 1;
  }

  //checks if the parks entered was not empty and adds to the query
  if(nameOfParks !== ""){
    if(counter > 0){
      query = query + "&";
    }

    query = query + "park=" + nameOfParks;
    counter = counter + 1;
  }

  //checks if the movietile entered was not empty and adds to the query
  if(nameofTitles !== ""){
    if(counter > 0){
      query = query + "&";
    }
    query = query + "title=" + nameofTitles;
    counter = counter + 1;
  }

  //stores the each element from the query and marks it on the map based on longitude and latitude
  $.get(query, function(response){
    $.each(response, function(i,v){
      var info = "<br>" + "Which day: " + v.day + "<br>" + v.park + " " + v.park_phone + "<br>" + v.park_address + "<br>" + v.title + " " + v.date
        + " " + v.rating + "<br>" + "Closed Captions: " + v.cc + "<br>";

      var getLatitude = parseFloat(v.location.latitude)
      var getLongitude = parseFloat(v.location.longitude)
      //create an info window
      var infoWindow = new google.maps.InfoWindow({
        content: info
      });

      //create new marker
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(getLatitude, getLongitude),
        map: map
      });

      marker.addListener('click',function(){
        infoWindow.open(map, marker);
      });

    });
  });
}
