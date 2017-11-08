var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
osm = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
map = new L.Map('map', {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 15 });
var circle = L.circleMarker([-37.7612, 175.2856], { fillColor: "#f00", radius: 8 } ).bindLabel("Hello World", { direction: 'left' }).addTo(map);
L.marker([-37.7772, 175.2606]).bindLabel('Look revealing label!').addTo(map);
var m = L.marker([-37.785, 175.263], {draggable:true}).bindLabel('A sweet static label!', { noHide: true })
.addTo(map);
// Move marker to confirm that label moves when marker moves (first click)
// Remove marker on click so we can check that the label is also removed (second click)
var clicks = 0;
function onMarkerClick() {
clicks++;
    if (clicks === 1) {
        m.setLatLng(map.getCenter());
    } else {
        m.off('click', onMarkerClick);
        map.removeLayer(m);
    }
}
m.on('click', onMarkerClick, this);
var p = L.polyline([
[-37.7612, 175.2756],
[-37.7702, 175.2796],
[-37.7802, 175.2750]
],{ weight: 12, color: '#fe57a1' }).bindLabel('Even polylines can have labels.', { direction: 'auto' }).addTo(map);
// Remove polyline on click so we can check that the label is also removed
p.on('click', function () { map.removeLayer(p); });
var deathIcon = L.icon({
iconUrl: '../dist/images/death.png',
iconSize: [36, 36],
iconAnchor: [18, 18],
popupAnchor: [0, -18],
labelAnchor: [14, 0] // as I want the label to appear 2px past the icon (18 + 2 - 6)
});
var noHide = false;
L.marker([-37.7712, 175.2646], {
    icon: deathIcon
})
.bindLabel('Erghhhhh..')
.bindPopup('Can has popup?')
.addTo(map)
.on('click', function () {
    m.setLabelNoHide(noHide);
    noHide = !noHide;
});
L.multiPolygon([
    [[-37.7599, 175.2515], [-37.7599, 175.2595], [-37.7653, 175.2595], [-37.7653, 175.2515], [-37.7599, 175.2515]],
    [[-37.7672, 175.2560], [-37.7672, 175.2601], [-37.7706, 175.2601], [-37.7706, 175.2560], [-37.7672, 175.2560]]
])
.bindLabel('MultiPolygon\'s have labels as well :)')
.addTo(map);