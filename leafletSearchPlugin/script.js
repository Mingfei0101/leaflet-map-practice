
var map = L.map('map').setView([-41.2858, 174.78682], 14); // initializes the map
mapLink = 
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    
var osmGeocoder = new L.Control.OSMGeocoder({ //initializes the osmGeocoder control
    collapsed: false,
    position: 'bottomright',
    text: 'Find!',
    });
map.addControl(osmGeocoder); //adds the search controls to the map