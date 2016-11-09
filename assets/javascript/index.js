//load the page
$(document).ready(function() {
    //list your global variables:

    //create a variable that's set as an object 
    var automobiles = {
        cars: [{
            car: 'Porsche'

        }, {
            car: 'Ferrari'

        }, {
            car: 'Lamborghini'

        }, {
            car: 'Aston Martin'

        }, {
            car: 'Range Rover'

        }, {
            car: 'Tesla'

        }, {
            car: 'Jaguar Car'

        }, {
            car: 'Viper Car'

        }, {
            car: 'Mercedes Benz'

        }, {
            car: 'BMW'

        }]
    };


    //call the function to append the buttons
    displayButtons();

    //capture the on click of each button using jquery to query the giphy api for that search term 
    $('button').on('click', function() {

        //create a variable that will pull the category usind data- and set it as the query search term
        var category = $(this).data('category');

        //pull from the Giphy API using the variable category and set it as a variable
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + category + "&api_key=dc6zaTOxFJmzC";

        //use ajax request data
        $.ajax({ url: queryURL, method: 'GET' })
            //use .done to return data
            .done(function(response) {
                var results = response.data;

                //use a for loop to display the number of results that come back to 
                for (var i = 0; i < results.length; i++) {

                    //create a variable set to the images div
                    var gifDiv = $('#images');
                    //create a rating variable set to the index of the results of the giphy api
                    var rating = results[i].rating;

                    //create a new variable that adds a p tag to the images div to display the rating
                    var p = $('<p>').text('Rating:' + rating);

                    //create a gifs variable set to the images div
                    var gifs = $('#images');
                    gifs.attr('src', results[i].images.fixed_height.url);


                    gifDiv.append(p);
                    gifDiv.append(gifs);

                    $('#images').append(gifDiv);

                    console.log('linked to api');
                }
            });

    });
    //display the still image
    //use an if statement to capture the on click of the still image and append the image to display the gif


    //pull the data from the user input box when the submit button is clicked
// $('#submit').on('submit', function() {

            // 	var userInput = $('#submit')
            // });

    //use .val().trim();
    //append the dom a new button with that name
    //use return false
    //remove all your console.logs before submitting

    //function to append the dom to list the 10 buttons using a for loop through the length of the object to create the necessary number of buttons 
    function displayButtons() {
        var buttonsHtml = "";
        for (var i = 0; i < automobiles.cars.length; i++) {
            var buttons = automobiles.cars[i];
            var buttonStr = buttons.car;
            buttonsHtml = buttonsHtml + '<button>' + buttonStr + '</button>';

        }
        $('#buttonCategory').html(buttonsHtml);
        console.log(buttonsHtml);
    }
});
