//AJAX call for playlist page
$(document).ready(function(){
  var getter = $.ajax({
    url:"https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"
  });

  getter.done(function(response){
      console.log("ajax call for playlists")
      //playlist album display
      var res = response.results
      for (var i = 0; i < res.length; i++) {
        var img_cover = res[i].cover_art;
        var title = res[i]["title"];
        var artist = res[i]["artist"];
        var id = res[i]["id"];
        // var array = [];
        // var obj = {};
        $("#allAlbums").append('<img id='+id+' src="images/'+img_cover+'"height=100px, width=100px/>')
        // obj["title"] = title;
        // array.push(obj);
        // console.log(obj);
        // console.log(array);
        // $(document).on("click", "#'+res[i].id+'", function(){
        //   $("#trackInfo").append('<div id='+res[i]["id"]+'>'+res[i]["artist"]+" : "+res[i]["title"]+'</div>')
        // })
      }
      $(document).on("click", "#2", function(){
        $("#trackInfo").append('<div id='+2+'>'+res[0]["artist"]+" : "+res[0]["title"]+'</div>')
      })
      $(document).on("click", "#6", function(){
        $("#trackInfo").append('<div id='+6+'>'+res[1]["artist"]+" : "+res[1]["title"]+'</div>')
      });
      $(document).on("click", "#22", function(){
        $("#trackInfo").append('<div id='+22+'>'+res[2]["artist"]+" : "+res[2]["title"]+'</div>')
      });
      $(document).on("click", "#18", function(){
        $("#trackInfo").append('<div id='+18+'>'+res[3]["artist"]+" : "+res[3]["title"]+'</div>')
      });
      $(document).on("click", "#55", function(){
        $("#trackInfo").append('<div id='+55+'>'+res[4]["artist"]+" : "+res[4]["title"]+'</div>')
      });
      $(".clearButton").click(function(){
        $("#trackInfo").remove();
      });
      //album names in th "accumulator"

      // for (var i = 0; i < response.results.length; i++) {
      //   var title = response.results[i]["title"];
      //   var artist = response.results[i]["artist"];
      //   var id = response.results[i]["id"];
      //   var obj = {};
      //   var pack = "id#:"+id+":"+artist+":"+title;
      //   // $("#trackInfo").append('<div id='+id+'>'+artist+" : "+title+'</div>');
      //   console.log(pack);
      //   obj[pack] = pack
      //   console.log(obj)
      //
      //   $(document).on("click", "#allAlbums", function(){
      //     $("#trackInfo").append('<div id='+id+'>'+artist+" : "+title+'</div>');
      //   })
      // }



  });

  getter.fail(function(response){
    console.log("AJAX Call failed")
  });

});

//AJAX POST
//submit post request.
$(".submitButton").click(function(){
  var poster = $.ajax({
    url:"https://lit-fortress-6467.herokuapp.com/post",
    method: "POST",
    data: {}
  });

  poster.done(function(response){
      console.log("ajax post success");
  });

  poster.fail(function(response){
    console.log("AJAX Call failed on button"+response[0])
  });

});
