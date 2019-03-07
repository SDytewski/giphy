function getGifs(topics) {

    //var ideas = "guitar"
    var apiKey ="FUWnSr7qCig53B78fBaeTkc4NzPpq6EW"
    var searchTerm = topics;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchTerm +"&limit=10&offset=0&rating=PG&lang=en"
    
    
    
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);

        var results=response.data;

        for (var i = 0; i < response.data.length; i++){
           var p = $("<p>");
           p.text("Rated: " + response.data[i].rating);     
            var img = $("<img>");
          // img.attr("src",  response.data[i].images.original.url);
            img.attr("src", results[i].images.fixed_height_still.url);
            img.attr("data-still", results[i].images.fixed_height_still.url);
            img.attr("data-animate", results[i].images.fixed_height.url)
            img.attr("data-state", "still")
            img.addClass("gif");





            $("#gif-holder").append(img,p);            

        }
    });
    
}


var topics = ["hockey", "guitar", "yoga", "meditation", "books", "vegan", "comedy"];    

        function makeButtons() {

            $("#buttons").empty();
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
                    btn.addClass("btn btn-success show-btn mx-2");
            
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


// When the user clicks one of the still GIPHY images, and it animates. 
//When the user clicks the gif again, it stops playing.
$("#gif-holder").on("click", ".gif", function(event){
    //use this to prevent page from reloading and losing data
    
    event.preventDefault();
    // gets the current state of the clicked gif 
    var state = $(this).attr("data-state");
    
    // according to the current state gifs toggle between animate and still 
    //learned this in class on Monday, 3/4/19...refer to class video...
    if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
})

$(".submitbutton").on("click", function(event){ 
  event.preventDefault(); 
  var topic = $("#input").val().trim();
  topics.push(topic);
  console.log(topics);
  makeButtons();



});



































































//$(document).on("click", )

  //data[i].images.original_still.url





        






  
  
   
        //taking the value of the image  URL and storing in a variable 
 //       var imageUrl = response.data.image_original_url;

        // dynamically creating an new img tag storing it in a variable
   //     var hockeyImage = $("<img>");

        // setting the src and alt attribte for the catImage we just created
     //   hockeyImage.attr("src", imageUrl); //html
       // hockeyImage.attr("alt", "hockey image");

        //stacking newests image in #images
      //  $("#images").prepend(hockeyImage);
  
  
  
  
  //data[i].images.original_still.url
  
  
  
 //   })


//$(document).on("click",") for creating the click.

