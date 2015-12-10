//AJAX call for home page
$(document).ready(function(){
  console.log("I am here");
  var getter = $.ajax({
    url:"https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"
  });

  getter.done(function(response){
      //home page with a 3 random album covers that populate the div
      for (var i = 0; i < 1; i++) {
        var randd = Math.floor( (Math.random() * 5))
        var img_cover = response.results[randd].cover_art;
        var title = response.results[randd]["title"];
        $("#image1").append('<img src="images/'+img_cover+'"height=175px, width=175px/>')
        $(document).on("click", "#image1", function(){
          $("#container").append('<div>'+title+'</div>')
        })
      }
      for (var i = 0; i < 1; i++) {
        var randd = Math.floor( (Math.random() * 5))
        var img_cover = response.results[randd].cover_art;
        $("#image2").append('<img src="images/'+img_cover+'"height=175px, width=175px/>')
      }
      for (var i = 0; i < 1; i++) {
        var randd = Math.floor( (Math.random() * 5))
        var img_cover = response.results[randd].cover_art;
        $("#image3").append('<img src="images/'+img_cover+'"height=175px, width=175px/>')
      }

  })

  getter.fail(function(response){
    console.log("AJAX Call failed")
  });

});
