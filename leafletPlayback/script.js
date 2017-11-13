
$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([44.61131534, -123.4726739], 9);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    var marker =new L.marker([ -123.77252789,44.37857221], //Declare a variable with the L.marker method at [-41.29042,174.78219].
        {draggable: false,                          //set as false by default ******* Drag a marker
        title: 'station 06200005BA',                      // add title to a marker
        opacity: 0.8}                              // 0(transparent), 1(opaque)
        )
        .addTo(map);  

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

