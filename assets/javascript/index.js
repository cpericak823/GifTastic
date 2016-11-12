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
    //capture the on click of each button using jquery to query the giphy api for that search term 
    $(document).on('click', "button", function() {

        //create a variable that will pull the category usind data- and set it as the query search term
        var category = $(this).data('category');

        //pull from the Giphy API using the variable category and set it as a variable
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + category + "&api_key=dc6zaTOxFJmzC&limit=10";

        //use ajax request data
        $.ajax({ url: queryURL, method: 'GET' })

        //use .done to return data
        .done(function(response) {
            var results = response.data;

            //empty the images div before showing the gifs
            $('#images').empty();

            //use a for loop to display the number of results that come back to 
            for (var i = 0; i < results.length; i++) {

                //create a variable set to the images div
                var gifDiv = $('<div>').addClass('col-md-4');

                //create a rating variable set to the index of the results of the giphy api
                var rating = results[i].rating;

                //create a new variable that adds a p tag to the images div to display the rating
                var p = $('<p>').text('Rating: ' + rating);

                //create a gifs variable set to the images div
                var gifs = $('<img>').addClass('gifImage');

                //add an atrribute to the gif variable called source and pull the link for the api results and displays the still image
                gifs.attr('src', results[i].images.fixed_width_still.url).attr('data-state', 'still').attr('data-still', results[i].images.fixed_width_still.url).attr('data-animate', results[i].images.fixed_height.url);

                //append the variable gifDiv to include the rating in the p tag
                gifDiv.append(gifs);

                //append the variable gifDiv to also include the gifs themselves in the gif variable
                gifDiv.append(p);

                //append the html id images with the gifDiv variable
                $('#images').append(gifDiv);
            }
        });
    });
    //capture an on click of the gifs
    $('.gifImage').on('click', function() {
        //set a variable equal to the images with the attribute of data state
        var state = $(this).attr('data-state');

        //use an if statement to toggle between the  still image and append the image to display the gif
        if (state === 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });

    //pull the data from the user input box when the submit button is clicked
    $('#addCategory').on('click', function() {

        //create a new variable set to the value of the userinput box and subtract any spaces before or after the text
        var userInput = $('#newCategory').val().trim();

        //create a new variable set to a button with an attribute of data-category and the userinput
        var userCategory = $('<button>').attr("data-category", userInput).text(userInput);

        //append the buttonCategory div to include the new variable userCategory
        $('#buttonCategory').append(userCategory);

        return false;
    });
});
