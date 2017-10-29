var map = L.map('map').setView([-41.2858, 174.78682], 14);
mapLink = 
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';

// load and display the layer on the map: 
//L.tileLayer( <String> *urlTemplate*, <TileLayer options> *options*? )

L.tileLayer(  
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: 'Map data &copy; ' + mapLink,
    maxZoom: 18,
    }).addTo(map);

/*The urlTemplate is a string in the form http://{s}.mapdomain.org/{z}/{x}/{y}.png, 
where the {s} will allow one of the subdomains of the main domain to be used. 
These are typically used sequentially to make loading the map faster by allowing multiple parallel requests. 
The {z} declares the zoom level and the {x} and {y} define the tile coordinates. 
We will look closely at how these urls are formed in a future section of the book 
since they are an interesting feature in themselves and it is useful to understand their working in relation to the map being displayed.

The TileLayer options provides scope for a range of different options when loading or displaying the tiles. */

/*In our example we are retrieving our tiles from openstreetmap.org and setting options for attribution and maxZoom.

attribution is the placing of appropriate reference to the source of the tiles. 
The idea is to ensure that credit (and copyright acknowledgement) is provided to the tile provider as is reasonable. 
In the example used here we place the words ‘Map Data’ and then a copyright symbol (which is produced by the text &copy) 
followed by the variable mapLink which is declared slightly earlier in the JavaScript code and is set to :
<a href="http://openstreetmap.org">OpenStreetMap</a> 
which provides the text OpenStreetMap and a link to openstreetmap.org. 

maxZoom sets the maximum zoom level of the map.

The .addTo method adds the tiles to the map.*/

// -----===== Adding a marker to the map =====-----

var marker = L.marker([-41.29042, 174.78219], //Declare a variable with the L.marker method at [-41.29042,174.78219].
    {draggable: true,                          //set as false by default ******* Drag a marker
    title: 'Hover Text',                      // add title to a marker
    opacity: 0.8}                              // 0(transparent), 1(opaque)
    )
    .addTo(map)                                 // [simply add that to our map by adding .addTo(map)]
    // Adding a popup to the map 
    .bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
    .openPopup();                               // load popup when open the page, if delete it, it'll open when click on marker

/*  var marker = L.marker([-41.29042, 174.78219],
        {option1: true,                 // a boolean value
        option2: 'a string lives here', // a string
        option3: 1234}                  // a number
        )
       .addTo(map);
*/ 