$(document).ready(function(){


    var APIKey ="FUWnSr7qCig53B78fBaeTkc4NzPpq6EW"

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=hockey"



    //My topics and loop

//var topics = ["hockey", "guitar", "yoga", "meditation", "books, "vegan", "comedy"]

//var i;
//for (i = 0; i < topics.length; i++) { 
  //  console.log(topics);
//}
$("#hockey").on("click", function() {

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);
  
  
   
        //taking the value of the image  URL and storing in a variable 
        var imageUrl = response.data.image_original_url;

        // dynamically creating an new img tag storing it in a variable
        var hockeyImage = $("<img>");

        // setting the src and alt attribte for the catImage we just created
        hockeyImage.attr("src", imageUrl); //html
        hockeyImage.attr("alt", "hockey image");

        //stacking newests image in #images
        $("#images").prepend(hockeyImage);
  
  
  
  
  
  
  
  
    })


//$(document).on("click",") for creating the click.

})


});