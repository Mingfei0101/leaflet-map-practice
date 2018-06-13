
$(function() {

    //get location
      // Setup leaflet map
    
      //var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');
      // add feature to switch between tile layers
      var mapbox_url = 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png';
      var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      var landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png';
      var tonerUrl = 'http://tile.stamen.com/toner/{z}/{x}/{y}.png';
      var terrainUrl='http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg';
      var watercolorUrl ='http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
      
      var mapbox_map = L.tileLayer(mapbox_url);
      var osmMap = L.tileLayer(osmUrl);
      var landMap = L.tileLayer(landUrl);
      var tonerMap = L.tileLayer(tonerUrl);
      var terrainMap=L.tileLayer(terrainUrl);
      var watercolorMap= L.tileLayer(watercolorUrl);

      var map = new L.Map('map',{layers:[osmMap]}); // set the default layer to load

      var baseLayers = {  // all the layer options
        "mapbox": mapbox_map,
        "Open Street": osmMap,
        "Landscape": landMap,
        "Watercolor": watercolorMap,
        "Toner": tonerMap,
        "Terrain": terrainMap
    };
        // Adds the background layer to the map
        L.control.layers(baseLayers).addTo(map);
  
      // Center map and set default zoom level
       //get the location from web browser if user agreed, otherwise use default settings; 
       // works in Chrome(slow) !!!!! not in Safari!!!!!
      if (navigator.geolocation.getCurrentPosition(function(position){
        map.setView([position.coords.latitude, position.coords.longitude],9);
      }));
      else(map.setView([0, 0], 0)); // this is the default setting
  
  
      // create slider
      /*var slider = L.timelineSliderControl({
          formatOutput:function(date){
              return moment(date).format("YYYY-MM-DD");
          }
      });*/
     // map.addControl(slider);
     
     /*
     L.Control.SliderControl = L.Control.extend({
    options: {
        layers: null,
        timeAttribute: 'time', // 'time' in geoJson file, in etag it is called "timestamp"
        startTimeIdx: 0,    // start looking for timestring at index[0]
        timeStrLength: 19,  // the size of yyyy-mm-dd hh:mm:ss i.e. 19 
        maxValue: -1,
        minValue: 0,
        showAllOnStart: true,
        markers: null,
        range: true,
        alwaysShowDate : true,

    }
     */
     
      /*var legend = L.control({position: "topleft"}); // might be useful in the future
       legend.onAdd = function(map){
       };
       */
      var locations = [];
      
      $(document).ready(function(){
          $.getJSON("https://head.ouetag.org/api/etag/reader_location/", function(result){
              $.each(result.results, function(i,l){ // playback function
                  var reader = l.reader;  // get reader name using dot notation
                  var lat = l.latitude;  // get latitude
                  var lon = l.longitude;  // get longitude
                  var location = [lat, lon];
                  var active = l.active;  // boolean type data
                  var start = l.start_timestamp;  //***look into the length of timestamp***
                  if (active == true){ //select only the active reader  
                      locations.push(location);
                      $.getJSON("https://head.ouetag.org/api/etag/tag_reads/?search&reader="+reader, function(get){
                      var count = get.count; 
                      var time = get.tag_timestamp;
                      var tag = get.tag;
                      var marker = new L.Marker(location) //create marker and add active reader, counts and starting time to map
                      .bindPopup("station: " + reader +'<br>'+"count: " +count+'<br>'+"start from: "+start)
                      .addTo(map);
                      
                  })
                  }               
              })
          })
          
      });
  });
  
  
  
  
  