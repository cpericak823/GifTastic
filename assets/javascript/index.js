//load the page
$(document).ready(function() {

    //Variables:
    //create a variable that's set to an object 
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

    //Functions:
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
                var gifs = $('<img>');

                //add an atrribute to the gif variable called source and pull the link for the api results
                gifs.attr('src', results[i].images.fixed_height.url);

                //append the variable gifDiv to include the rating in the p tag
                gifDiv.append(p);

                //append the variable gifDiv to also include the gifs themselves in the gif variable
                gifDiv.append(gifs);

                //append the html id images with the gifDiv variable
                $('#images').append(gifDiv);

            }
        });

    });
    //display the still image
    //use an if statement to capture the on click of the still image and append the image to display the gif


    //pull the data from the user input box when the submit button is clicked
    $('addCategory').on('click', function() {
        //create a new variable set to the value of the userinput box and subtract any spaces before or after the text
        var userInput = $('#newCategory').val().trim();

        //create a new variable set to a button 
        var userCategory = $('<button>');

        //add an attribute to the userCategory variable equal to the userInput variable
        userCategory.attr("id", "userInput");

        //append the userCategory to a new button element with the userInput as the name
        userCategory.append($("<button>" + userInput + "</button>"));

        //append the buttonCategory div to include the new variable userCategory
        userCategory.append($('#buttonCategory'));
    });


    //append the dom a new button with that name
    //use return false
    //remove all your console.logs before submitting

    //function to append the dom to list the 10 buttons using a for loop through the length of the object to create the necessary number of buttons 
    function displayButtons() {

        $('#buttonCategory').empty();
        for (var i = 0; i < automobiles.cars.length; i++) {
            var buttons = automobiles.cars[i];
            var buttonStr = buttons.car;
            var button = $('<button>').attr("data-category", buttonStr).text(buttonStr);
            $('#buttonCategory').append(button);

        }

    }
});
