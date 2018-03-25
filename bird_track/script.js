
$(function() {

    //get location
      // Setup leaflet map
      var map = new L.Map('map');
  
      var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');
  
      // Center map and default zoom level
       //get the location from web browser if user agreed, otherwise use default settings; 
       // works in Chrome(slow) !!!!! not in Safari!!!!!
      if (navigator.geolocation.getCurrentPosition(function(position){
        map.setView([position.coords.latitude, position.coords.longitude],9);
      }));
      else(map.setView([0, 0], 0)); // this is the default setting
  
  
      // Adds the background layer to the map
      map.addLayer(basemapLayer);
  
      // create slider
      /*var slider = L.timelineSliderControl({
          formatOutput:function(date){
              return moment(date).format("YYYY-MM-DD");
          }
      });*/
     // map.addControl(slider);
      var locations = [];
      
      $(document).ready(function(){
          $.getJSON("https://head.ouetag.org/api/etag/reader_location/", function(result){
              $.each(result.results, function(i,l){
                  var reader = l.reader;
                  var lat = l.latitude;
                  var lon = l.longitude;
                  var location = [lat, lon];
                  var active = l.active;
                  var start = l.start_timestamp;
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
  
  
  
  
  