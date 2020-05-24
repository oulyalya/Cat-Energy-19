function initMap() {
  var opt = {
    center: {lat: 59.938892, lng: 30.321816},
    zoom: 17
  }

  var map = new google.maps.Map(document.getElementById("map"), opt);

  var marker = new google.maps.Marker({
      position: {lat: 59.938829, lng: 30.323053},
      map: map,
      icon: '../img/map-pin.png'
    });
}
