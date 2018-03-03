$(document).ready(function(){
  $("button").click(function(){
      $.getJSON("https://head.ouetag.org/api/etag/tag_reads/?format=json", function(result){
          $.each(result.results, function(i, field){
            var d = new Date(field.tag_timestamp);
            $("div").append(Date.parse(field.tag_timestamp)+ "<br>");
              
          });               
      });
  });
});

var bird1 = {
  "type": "Feature",
  "geometry": {
    "type": "MultiPoint",
    "coordinates": [
 
      [
        -123.77252789,  
        44.37857221
      ],
      [
        -123.77252789,  
        44.37857221
      ],
      [
        -123.77252789,  
        44.37857221
      ],
      [
        -123.77252789,  
        44.37857221
      ],
      [
        -123.77252789,  
        44.37857221
      ]
    ]
},
	"properties": {
   	 	"title" : "bluejay",
      "path_options" : { "color" : "red" },
      "reader" : field.reader,
    	"time": field.tag_timestamp
    }
  };
	var bird2 = {
    "type": "Feature",
    "geometry": {
      "type": "MultiPoint",
      "coordinates": [
   
        [
          -123.77252789,  
          44.37857221
        ],
        [
          -123.77252789,  
          44.37857221
        ],
        [
          -123.77252789,  
          44.37857221
        ],
        [
          -123.77252789,  
          44.37857221
        ],
        [
          -123.77252789,  
          44.37857221
        ]
      ]
  },
    "properties": {
          "title" : "tillicum",
        "path_options" : { "color" : "red" },
        "reader" : field.reader,
        "time": field.tag_timestamp
      }
    };
var demoTracks = [bird1];

 

