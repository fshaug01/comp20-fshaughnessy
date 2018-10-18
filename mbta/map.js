var myLat = 0;
var myLng = 0;
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
  zoom: 13, // The larger the zoom number, the bigger the zoom
  center: me,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();

var locations = [
  {name: "South Station", LatLng: [42.352271, -71.05524200000001], stop_id: "place-sstat"},
  {name: "Andrew", LatLng: [42.330154, -71.057655], stop_id: "place-andrw"},
  {name: "Porter Square", LatLng: [42.3884, -71.11914899999999], stop_id: "place-portr"},
  {name: "Harvard Square", LatLng: [42.373362, -71.118956], stop_id: "place-harsq"},
  {name: "JFK/UMass", LatLng: [42.320685, -71.052391], stop_id: "place-jfk"},
  {name: "Savin Hill", LatLng: [42.31129, -71.053331], stop_id: "place-shmnl"},
  {name: "Park Street", LatLng: [42.35639457, -71.0624242], stop_id: "place-pktrm"},
  {name: "Broadway", LatLng: [42.342622, -71.056967], stop_id: "place-brdwy"},
  {name: "North Quincy", LatLng: [42.275275, -71.029583], stop_id: "place-nqncy"},
  {name: "Shawmut", LatLng: [42.29312583, -71.06573796000001], stop_id: "place-smmnl"},
  {name: "Davis", LatLng: [42.39674, -71.121815], stop_id: "place-davis"},
  {name: "Alewife", LatLng: [42.395428, -71.142483], stop_id: "place-alfcl"},
  {name: "Kendall/MIT", LatLng: [42.36249079, -71.08617653], stop_id: "place-knncl"},
  {name: "Charles/MGH", LatLng: [42.361166, -71.070628], stop_id: "place-chmnl"},
  {name: "Downtown Crossing", LatLng: [42.355518, -71.060225], stop_id: "place-dwnxg"},
  {name: "Quincy Center", LatLng: [42.251809, -71.005409], stop_id: "place-qnctr"},
  {name: "Quincy Adams", LatLng: [42.233391, -71.007153], stop_id: "pplace-qamnl"},
  {name: "Ashmont", LatLng: [42.284652, -71.06448899999999], stop_id: "place-asmnl"},
  {name: "Wollaston", LatLng: [42.2665139,  -71.0203369], stop_id: "place-wlsta"},
  {name: "Fields Corner", LatLng: [42.300093, -71.061667], stop_id: "place-fldcr"},
  {name: "Central Square", LatLng: [42.365486, -71.103802], stop_id: "place-cntsq"},
  {name: "Braintree", LatLng: [42.2078543, -71.0011385], stop_id: "place-brntn"},
]

locations[0].name = "South";
locations[0].LatLng[1] = 2;


function init() {
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  getMyLocation();
}

function getMyLocation() {
  if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
    navigator.geolocation.getCurrentPosition(function(position) {
      myLat = position.coords.latitude;
      myLng = position.coords.longitude;
      renderMap();
    });
  }
  else {
    alert("Geolocation is not supported by your web browser.  What a shame!");
  }
}

function renderMap() {
  me = new google.maps.LatLng(myLat, myLng);

  // Update map and go there...
  map.panTo(me);
  
  // Create a marker
  marker = new google.maps.Marker({
    position: me,
    title: "Here I Am!"
  });
  marker.setMap(map);
    
  // Open info window on click of marker
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(marker.title);
    infowindow.open(map, marker);
  });
}











