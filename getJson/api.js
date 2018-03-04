$(document).ready(function(){
  $("button").click(function(){
    var readers =[];
    var tag_reader =[];
    var tags = [];
     $.getJSON("https://head.ouetag.org/api/etag/readers/", function(t){
       $.each(t.results, function(m, get){
         readers.push(get.reader_id);
       });
       $("div").append("reader number: " + readers.length + '</br> ');
       for (var i =0; i< readers.length; i++){
         $("div").append("reader ID: " + readers[i]+ '</br>');
        };
     });

      $.getJSON("https://head.ouetag.org/api/etag/tag_reads/", function(r){
        $("div").append('Total reads count: ' + r.count+'</br>');
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
       for (i in count)$("div").append('reader: '+i + ' count: '+count[i]+'</br>');

      });
  });
  
});

