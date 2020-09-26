$("document").ready(function () {
    //store values of ingredients in Array
    var ingredientsArray = [];

    //get value of ingredients from input field
    //var IngredientEl = document.getElementById("ingredient");

    //add ingredient to ingredients Array
    //ingredientsArray.push("ingredient");


    document.getElementById("addIngrBtn").onclick = function () {

        let ingredient = document.getElementById("ingredient").value;
        //let newItem = '<li id="ing_rice"> <input id="button" type="checkbox"><label for="checkbox12">Rice</label> </li>';
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
    }

    // Recipe search button query 
    // Hidden class will hide or display divs

    $("#recipe-query").on("click", function () {
        console.log("Recipe search button has been clicked");

        $("#recipe-display").removeClass("hidden");
        $("#search-options").addClass("hidden");

    });
});