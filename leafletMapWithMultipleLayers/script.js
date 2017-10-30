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

L.control.layers(baseLayers).addTo(map);