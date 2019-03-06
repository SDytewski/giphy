function getGifs(topics) {

    //var ideas = "guitar"
    var apiKey ="FUWnSr7qCig53B78fBaeTkc4NzPpq6EW"
    var searchTerm = topics;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm +"&limit=25&offset=0&rating=PG&lang=en"
    
    
    //"https://api.giphy.com/v1/gifs/search?api_key=FUWnSr7qCig53B78fBaeTkc4NzPpq6EW&tag=" + ideas



    //My topics and loop

//var topics = ["hockey", "guitar", "yoga", "meditation", "books, "vegan", "comedy"]

//var i;
//for (i = 0; i < topics.length; i++) { 
  //  console.log(topics);
//}
//$("#hockey").on("click", function() {

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);

        for (var i = 0; i < response.data.length; i++){
           var p = $("<p>");
           p.text("Rated: " + response.data[i].rating);     
            var img = $("<img>");
            img.attr("src",  response.data[i].images.original.url);
            $("#gif-holder").append(p,img);            

        }
    });
    
}


        

        function makeButtons() {
            var topics = ["hockey", "guitar", "yoga", "meditation", "books", "vegan", "comedy"]

            //loop through an array of strings

            // for each element in the array

            for(var i = 0; i < topics.length; i++) {
                 
                    // make a new button 
                    var btn = $("<button>");
                    // and a value of the title of the show 
                    btn.text(topics[i]);
                    // with a data-attribute of data-title
                    btn.attr("data-title", topics[i]);
                    // add the class of btn btn-success
                    btn.addClass("btn btn-success show-btn");
            
                    // append the new button the #buttons div
                    $("#buttons").append(btn);
                }
            }
            makeButtons();
            
// listen for the click .show-btn
$(document).on("click", ".show-btn", function(event){
    console.log("clicked on a btn");
    // clear gifs from the previous page 
    $("#gif-holder").empty();

    // get the buttons data-attribute value
     var show = $(this).attr("data-title");
     console.log(show);

    // call the function with that value
    // add new gifs
    getGifs(show);
});







        






  
  
   
        //taking the value of the image  URL and storing in a variable 
 //       var imageUrl = response.data.image_original_url;

        // dynamically creating an new img tag storing it in a variable
   //     var hockeyImage = $("<img>");

        // setting the src and alt attribte for the catImage we just created
     //   hockeyImage.attr("src", imageUrl); //html
       // hockeyImage.attr("alt", "hockey image");

        //stacking newests image in #images
      //  $("#images").prepend(hockeyImage);
  
  
  
  
  
  
  
  
 //   })


//$(document).on("click",") for creating the click.

