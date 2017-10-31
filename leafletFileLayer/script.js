(function (window) {
    'use strict';

    function initMap() { //load the map
        var L = window.L;
        var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; 2013 OpenStreetMap contributors'
        });
        var map = L.map('map', {
            center: [0, 0],
            zoom: 2
        }).addLayer(osm); //runs and configures Leaflet.FileLayer
        var style = {  //sets the styles for the control and the loaded gps traces
            color: 'crimson',
            opacity: 0.8,
            fillOpacity: 0.8,
            weight: 0.1,
            clickable: false
        };
        L.Control.FileLayerLoad.LABEL = '<img class="icon" src="folder.svg" alt="file icon"/>'; // declare the icon to initiate the file opening process 
        L.Control.fileLayerLoad({ 
            fitBounds: true,
            layerOptions: {
                style: style,
                pointToLayer: function (data, latlng) {
                    return L.circleMarker(
                    latlng,
                    { style: style }
                    );
                }
            }
        }).addTo(map);
    }

    window.addEventListener('load', function () {
        initMap();
    });
}(window));