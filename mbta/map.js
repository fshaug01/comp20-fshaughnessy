var dic = {};

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

function init() {
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  getMyLocation();

 for (i = 0; i < locations.length; i++) {

    loadStops();

    var infowindow = new google.maps.InfoWindow({
      content: locations[i].name, 
    });

    var icon = {
      url: "sox.png", 
      scaledSize: new google.maps.Size(50, 50),
    };

    marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i].LatLng[0], locations[i].LatLng[1]),
    map: map,
    infowindow: infowindow,
    icon: icon
  });

  google.maps.event.addListener(marker, 'click', function() {
    this['infowindow'].open(map, this);
  })

// Nearest Station
// navigator.geolocation.getCurrentPosition(function(somePos){
//   var userLat = somePos.coords.latitude;
//   console.log(userLat);
//   var userLng = somePos.coords.longitude;
//   console.log(userLng);
//   var userPosition = new google.maps.LatLng(userLat,userLng);
//   console.log(userPosition);
// });
//   var locationsLatLng = new google.maps.LatLng(locations[i].LatLng[0], locations[i].LatLng[1]);
//   var distance = google.maps.geometry.spherical.computeDistanceBetween(userPosition, locationsLatLng);
//   var min;
//   var closestStation;

//   if (i = 0){
//     min = distance;
//   }

//   if (distance < min) {
//     min = distance;
//     closestStation = locations[i][0];
//     closestStationLat = locations[i][1];
//     closestStationLng = stations[i][2];
//   }
//   convert
//   min = min * 0.00621371192;
  // var mbtaPath = [userPosition, closestStation];
  // var mbtaClosest = new google.maps.Polyline({
  // path: mbtaClosest,
  // geodesic: true,
  // strokeColor: '#FF0000',
  // strokeOpacity: 1.0,
  // strokeWeight: 2
  // });
  // mbtaLocations.setMap(map);
}



  var coordinatesA = [{lat: 42.395428, lng: -71.142483}, 
                    {lat: 42.39674, lng: -71.121815}, 
                    {lat: 42.3884, lng: -71.11914899999999},
                    {lat: 42.373362, lng: -71.118956},
                    {lat: 42.365486, lng: -71.103802},
                    {lat: 42.36249079, lng: -71.08617653},                  
                    {lat: 42.361166, lng: -71.070628},
                    {lat: 42.35639457, lng: -71.0624242},
                    {lat: 42.355518, lng: -71.060225},
                    {lat: 42.352271, lng: -71.05524200000001},
                    {lat: 42.342622, lng: -71.056967},
                    {lat: 42.330154, lng: -71.057655},
                    {lat: 42.320685, lng: -71.052391},
                    {lat: 42.31129, lng: -71.053331,},
                    {lat: 42.300093, lng: -71.061667},
                    {lat: 42.29312583, lng: -71.06573796000001},
                    {lat: 42.284652, lng: -71.06448899999999},
                    ];
  var mbtaLocations = new google.maps.Polyline({
  path: coordinatesA,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2
  });
  mbtaLocations.setMap(map);

  var coordinatesB = [{lat: 42.320685, lng: -71.052391},
                    {lat: 42.275275, lng: -71.029583},
                    {lat: 42.2665139, lng: -71.0203369},
                    {lat: 42.251809, lng: -71.005409},
                    {lat: 42.233391, lng: -71.007153},
                    {lat: 42.2078543, lng: -71.0011385},
                    ];
  var mbtaLocations = new google.maps.Polyline({
  path: coordinatesB,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2
  });
  mbtaLocations.setMap(map);
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
    title: "Current Location"
  });

  marker.setMap(map);
    
  // Open info window on click of marker
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(marker.title);
    infowindow.open(map, marker);
  });
}

function loadStops() {
      var stopid = locations[i].stop_id;
      request = new XMLHttpRequest();
      console.log("hit me 1");
      // Step 2: Open the JSON file at remote location
      request.open("GET","https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=" + stopid, true);
       console.log("hit me 2");
      // Step 3: set up callback for when HTTP response is returned (i.e., you get the JSON file back)
      request.onreadystatechange = function() {
        console.log("Hit me 3");
        if (request.readyState == 4 && request.status == 200) {
          theData = request.responseText;
          t = JSON.parse(theData);
          times = t.data;
          console.log(times);
          returnHTML = "<ul>"
          for (i = 0; i < times.length; i++) {
              console.log(times[i]);
              returnHTML += "<li>" + times[i].attributes.departure_time;
              "</li>";
              console.log(returnHTML);
              returnHTML += "<li>" + times[i].attributes.direction_id;
              "</li>";
              console.log(returnHTML);
          }
          returnHTML += "</ul>";
          document.getElementById("times").innerHTML =returnHTML;
        }
      }
      request.send();
      console.log("Hit me 4");
}










