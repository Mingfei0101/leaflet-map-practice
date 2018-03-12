
$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([35.11413, -90.091807], 9);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);
    
    /*var slider =L.timelineSliderControl({
        formatOutput: function(date){
            return moment(date).format("YYYY-MM-DD");
        }
    });
    map.addControl(slider)

    var readers =[];
    var tag_reader =[];
    var tags = [];
    var reads_count=[];*/
    // create another variable and then add counts to the reader location

    $(document).ready(function(){
        $.getJSON("https://head.ouetag.org/api/etag/reader_location/", function(result){
            $.each(result.results, function(i,l){
                var reader = l.reader;
                var lat = l.latitude;
                var lon = l.longitude;
                var location = [lat, lon];
                var active = l.active;
                var start = l.start_timestamp;
                if (active == true){
                    $.getJSON("https://head.ouetag.org/api/etag/tag_reads/?search&reader="+reader, function(get){
                    var count = get.count;
                    var time = get.tag_timestamp;
                    var tag = get.tag;
                    var marker = new L.Marker(location)
                    .bindPopup("station: " + reader +'<br>'+"count: " +count+'<br>'+"start from: "+start)
                    .addTo(map);
                })

                }
                
            })
        })
    });


    /*$(document).ready(function(){  //get reader coordinates and add only active reader to the map
        $.getJSON("https://head.ouetag.org/api/etag/reader_location/", function(result){
            $.each(result.results, function(i, field){
                var reader = field.reader;
                var latitude = field.latitude;
                var longitude = field.longitude;
                var locations = [field.latitude, field.longitude];
                var active = field.active;
                $.getJSON("https://head.ouetag.org/api/etag/tag_reads/?search&reader="+reader, function(readers){
                    var reads_counts = readers.count;
                })
                if (active ===true){
                    var marker = new L.Marker(locations)
                    .bindPopup("station: " + reader +reads_counts + ' \n') // add reader counts to the popup
                    .addTo(map);}
                });               
            });
        });*/
    

    // $(document).ready(function(){
      //  $.getJSON("https://head.ouetag.org/api/etag/tag_reads/", function(data){
        //    var timeline = L.timeline(data,{
          //      onEachFeature: function(feature, layer){
            //        layer.bindPopup(feature.results.tag);
              //  },
                //pointToLayer: function(data, latlng){
                  //  return L.circleMarker(latlng,{
                    //    radius: 10,
                      //  fillColor: 'red'
                    //});
               // }

            //});
           // timeline.addTo(map);
            //slider.addTimelines(timeline);
          
       //});
   // });    


});

//function bird_callback(data){
  //  var getInterval=function(field){
    //    return{
      //      start: field.results.tag_timestamp,
        //    end: field.results.tag_timestamp + 2000
        //};
   // }
//};



