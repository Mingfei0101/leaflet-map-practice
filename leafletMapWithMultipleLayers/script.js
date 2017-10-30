//sets up the links that we will use for attribution
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

//declare the URLs for the tiles and the attributions to display
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
osmAttrib = '&copy; ' + osmLink + ' Contributors',
landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;

// declare the layers with all information associated
var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
landMap = L.tileLayer(landUrl, {attribution: thunAttrib});

// add map 
var map = L.map('map', {
    layers: [osmMap] // only add one because when map first load we need only one and then to another
})
.setView([-41.2858, 174.78682], 14);

// declare base layer
var baseLayers = { 
"OSM Mapnik": osmMap, // text in layers section box
"Landscape": landMap
};

var coolPlaces = new L.LayerGroup(); // declare a new layer called coolPlaces
// define a set of markers and polyline and add to coolPlaces layer
L.marker([-41.29042, 174.78219])
    .bindPopup('Te Papa').addTo(coolPlaces),
L.marker([-41.29437, 174.78405])
    .bindPopup('Embassy Theatre').addTo(coolPlaces),
L.marker([-41.2895, 174.77803])
    .bindPopup('Michael Fowler Centre').addTo(coolPlaces),
L.marker([-41.28313, 174.77736])
    .bindPopup('Leuven Belgin Beer Cafe').addTo(coolPlaces),
L.polyline([
    [-41.28313, 174.77736],
    [-41.2895, 174.77803],
    [-41.29042, 174.78219],
    [-41.29437, 174.78405]
    ]
    ).addTo(coolPlaces);
var overlays = {
    "Interesting places": coolPlaces
};

L.control.layers(baseLayers,overlays).addTo(map); // add both base and overlay layer to the map 