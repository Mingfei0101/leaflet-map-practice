/*$(document).ready(function(){
  $("button").click(function(){
    var readers =[];
    var tag_reader =[];
    var tags = [];
    var reader_counts={};
     $.getJSON("https://head.ouetag.org/api/etag/readers/", function(t){
       $.each(t.results, function(m, get){
         readers.push(get.reader_id);
         $.getJSON("https://head.ouetag.org/api/etag/tag_reads/?search&reader="+get.reader_id, function(y){
          $("div").append("reader id: "+get.reader_id +' '+ " counts: "+ y.count +"<br>");
         });
       //$("div").append("reader number: " + readers.length + '</br> ');
       for (var i =0; i< readers.length; i++){
         //$("div").append("reader ID: " + readers[i]+ '</br>');
        };
      });
     });*/

     $(document).ready(function(){
      $("button").click(function(){
        var bird_species = [];
        var species;
        var species_counts = [];
        //var count={};
        $.getJSON("https://head.ouetag.org/api/etag/reader_location/", function(result){
          $.each(result.results, function(i,l){
              var reader = l.reader;
              var lat = l.latitude;
              var lon = l.longitude;
              var location = [lat, lon];
              var active = l.active;
              $("div").append("locations: "+location+ '<br>');
              if (active == true){
                  $.getJSON("https://head.ouetag.org/api/etag/tag_reads/?search&reader="+reader, function(get){
                  var count = get.count;
                  var time = get.tag_timestamp;
                  $("div").append("reader id: "+reader +' '+ " counts: "+ count + " locations: " +lat +", "+ lon+ '<br>');
                  $.each(get.results, function(t,bird){
                    var tag = bird.tag;
                    $.getJSON("https://head.ouetag.org/api/etag/tags/"+tag, function(l){
                      species = l.name;
                      //$("div").append(species+'<br>');
                    });
                    bird_species.push(species);
                  });  
                 //$("div").append(bird_species+'<br>');  
                 var birds = bird_species;
                  for(var s=0; s < birds.length; s++){
                    if (species_counts[birds[s]]){
                      species_counts[birds[s]]+=1;
                    }
                    else{
                      species_counts[birds[s]]=1;
                    }
                  };
                  for (s in species_counts){
                    if(s!="undefined"){ // undefined is caused by getJSON callback, species was called before getJSON finishes running
                      $("div").append("species: " +s+ ", counts: "+ species_counts[s]+'</br>'); 
                    }
                    };
                 
              }); 
            }           
          });
      });
      
    });
  
  });

      //for (i in count)$("div").append('species: '+i + ' count: '+count[i]+'</br>');

      /*$.getJSON("https://head.ouetag.org/api/etag/tag_reads/?page=5", function(r){
        //$("div").append('Total reads count: ' + r.count+'</br>');
        $.each(r.results, function(j, get){
          tag_reader.push(get.reader);
          tags.push(get.tag);
        });
        var count = [];
        for(var i=0; i<tag_reader.length; i++){
          if(count[tag_reader[i]]){
            count[tag_reader[i]]+=1;
          }
          else{
            count[tag_reader[i]]=1;
          }
       }
       //for (i in count)$("div").append('reader: '+i + ' count: '+count[i]+'</br>');

      });*/
      
      /*$.getJSON("https://head.ouetag.org/api/etag/tag_reads/", function(l){ // read the url and then loop it until hit the last page
        $.each(l.results, function(j, get){
          if (isNaN(reader_counts[get.reader])){
            reader_counts[get.reader]=1
          } else{
            reader_counts[get.reader]+=1
          }
        });
        for (i in reader_counts){
          if (i == "12007"){
            $("div").append("reader: "+i+ " counts: "+reader_counts[i]);

          };
      }; 
    }); */




