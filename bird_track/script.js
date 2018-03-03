
$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([35.11413, -90.091807], 9);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    $(document).ready(function(){
        $.getJSON("https://head.ouetag.org/api/etag/reader_location/", function(result){
            $.each(result.results, function(i, field){
                var reader = field.reader;
                var latitude = field.latitude;
                var longitude = field.longitude;
                var locations = [field.latitude, field.longitude];
                var active = field.active;
                if (active ===true){
                    var marker = new L.Marker(locations)
                    .bindPopup("station: " + reader)
                    .addTo(map);}
                });               
            });
        });
        

    // =====================================================
    // =============== Playback ============================
    // =====================================================
    
    // Playback options
    var playbackOptions = {
        playControl: true,
        dateControl: true,
        sliderControl: true     
    };
        
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);  
    
});