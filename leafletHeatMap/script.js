var map = L.map('map').setView([-41.5546,174.146], 10);
mapLink = 
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
}).addTo(map);

var heat = L.heatLayer(quakePoints,{
    radius: 20,
    blur: 15, 
    maxZoom: 17,
}).addTo(map);