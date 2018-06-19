# leaflet-map-practice

Usage

########## bird_index.html ##########

To use this map application in the web browser, you can either use server call or
open it in the local host.

To start with, you need to download the entire "bird_track" folder and make sure all files saved
under the same directory.

html: To open up this application in local web browser, right click on "bird_index.html" and choose "open with web browser".
That way when you open your browser you point to this directory and it allows you to access the files like a normal web site.

css: this will be your directory that will contain all the Cascading Style Sheet files you will use. and you will want to have at least one in the form of leaflet.css. 
You will notice in the code examples that follow there is a line like the following; <link rel="stylesheet" href="css/leaflet.css" />. 
This tells your browser that from the file it is running (one of the leaflet html files) if it goes into the ‘css’ folder it will find the leaflet.css file that it can load.

js: this will be your directory that will house all the JavaScript files you will use in the application. 

    <title>LeafletPlayback</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" rel="stylesheet" type="text/css" />
    <!--<script src="leaflet-src.js"></script>-->
    <!--<script src="leaflet.timeline.js"></script>-->
    <script src="http://code.jquery.com/jquery-1.11.0.js"></script>
    <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet-src.js"></script>
    <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
    <!--<script src="LeafletPlayback.js"></script>-->
    <!-- <script src="tracks.js"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!--<link href="leaflet.css" rel="stylesheet">-->
    <script src="js/leaflet-providers.js"></script>
    <style>
 
 Both leaflet.css and leaflet.js could be reached out locally or through links. In this code, I am using a hosted version 
 from offical location http://cdn.leafletjs.com/leaflet-0.7/. The latest stable Leaflet release is available on several CDN’s.
 Newest version is updated on both https://github.com/Leaflet/Leaflet and https://leafletjs.com/download.html. 
 If using local leaflet sources, you should input <script src="enter the path for leaflet.js file"></script> 
 <script src="enter the path for leaflet.css file"></script>
 
 
 ########## script.js ##########
 
 script.js is where the map was created. 
 
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
   
  The new L.Map declare a new Leaflet map in js. 
  The L.tileLayer function is used to load and display tile layers on the map. L.control.layers add multiple layers to the variable "map" created above.
 
 if (navigator.geolocation.getCurrentPosition(function(position){
        map.setView([position.coords.latitude, position.coords.longitude],9);
      }));
      else(map.setView([0, 0], 0)); // this is the default setting
  
  getCurrentPosition function gets the gps information of user, if authorized will navigate center of map at user's current positon, otherwise will use default setting.
  
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
