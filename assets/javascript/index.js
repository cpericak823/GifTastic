//load the page
$(document).ready(function() {
    //list your global variables:

    //create a variable that's set as an object 
    var automobiles = [{
        car: 'Porsche?'

    }, {
        car: 'ferrari'

    }, {
        car: 'lamborghini'

    }, {
        car: 'aston martin'

    }, {
        car: 'range rover'

    }, {
        car: 'tesla'

    }, {
        car: 'jaguar car'

    }, {
        car: 'viper car'

    }, {
        car: 'mercedes benz'

    }, {
        car: 'bmw'

    }];
}


//create a variable that will pull the category usind data- and set it as the query search term
var category = $(this).data('category');

//pull from the Giphy API using the variable category and set it as a variable
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + category + "&api_key=dc6zaTOxFJmzC&limit=10";


//append the dom to list the 10 buttons using a for loop through the length of the number of buttons
//capture the on click of each button using jquesry to query the giphy api for that search term 
//use ajax request data
//use .done to return data
//display the still image
//use an if statement to capture the on click of the still image and append the image to display the gif
//pull the data from the user input box when the submit button is clicked
//append the dom a new button with that name
});
