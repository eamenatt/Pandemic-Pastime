$("document").ready(function () {
    //store values of ingredients in Array
    var ingredientsArray = [];


    document.getElementById("addIngrBtn").onclick = function () {

        let ingredient = document.getElementById("ingredient").value;
        let newItem = document.createElement("li")
        newItem.appendChild(document.createTextNode(ingredient));
        document.getElementById("ingredientList").appendChild(newItem);

        document.getElementById("ingredient").value = "";
    }

    //Clear Button
    document.getElementById("clearIngrBtn").onclick = function () {
        let parent = document.getElementById("ingredientList");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        ingredientsArray = [];
    }

    document.getElementById("formID").addEventListener("submit", function (e) {
        e.preventDefault();
        return false;
    });

    //store values of ingredients in Array
    var ingredientsArray = [];
    $(".button").click(function () {
        var list = document.getElementById('ingredientList').childNodes;
        for (var i = 0; i < list.length; i++) {
            var arrValue = list[i].innerHTML;
            ingredientsArray.push(arrValue);
        }
    });


    //var listItems = document.getElementById('ingredientList').getElementsByTagName('li');


    var ingredients = "";
    $("#recipe-query").on("click", function () {
        console.log("Recipe search button has been clicked");

        for (var i = 0; i < ingredientsArray.length; i++) {
            ingredients += ingredientsArray[i];
            //return ingredients;

        }; 
        console.log(ingredients);
        console.log(ingredientsArray);
        $("#recipe-display").removeClass("hidden");
        $("#search-options").addClass("hidden");

    });

    //A comma-separated list of ingredients that the recipes should contain
    //var ingredients = "";
    //for (var i = 0; i < ingredientsArray.length; i++) {
    //    ingredients += ingredientsArray[i];
    //    return ingredients;
    //};

    //The maximum number of recipes to return (between 1 and 100). Defaults to 10
    var number = 5;

    //Whether to ignore typical pantry items, such as water, salt, flour, etc
    var ignorePantry = true;

    //Includes instructions in JSON object
    var includeInstructions = true;

    //DISPLAY VARIABLES
    //Displays recipe instructiosn on page
    var displayInstructions = "";
    var displayTitle = "";
    var displayImage = "";

    //Add an onclick "Next Recipe" to +1 the index
    var index = 0;
    document.getElementById("NextBtn").onclick = function () {
        index++;
    }

    //Find recipe by ingredients
    var apiKey = "9c7455831c634e4c8e907857c9b77b2c"
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + ingredients + "&ignorePantry=" + ignorePantry + "&instructionsRequired=" + includeInstructions + "&number=" + number;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response[index].image);
        console.log(response[index].title);
        console.log(response[index].id);

        displayImage = response[index].image;
        displayTitle = response[index].title;
        //code to append to webpage

        //This will get recipe instructions by the recipe ID
        var recipeID = response[index].id;
        var queryURL2 = "https://api.spoonacular.com/recipes/" + recipeID + "/information?apiKey=" + apiKey;

        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            console.log(response.instructions);

            displayInstructions = response.instructions;
            //code to append to webpage
        });
    });

});

$("#wine-query").on("click", function () {
    console.log("wine pairing button has been clicked");

    $("#wine-display").removeClass("hidden");
    $("#search-options").addClass("hidden");

});


