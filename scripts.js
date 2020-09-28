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



    $("#recipe-query").on("click", function () {
        console.log("Recipe search button has been clicked");

        $("#recipe-display").removeClass("hidden");
        $("#search-options").addClass("hidden");

    });
});

$("#wine-query").on("click", function () {
    console.log("wine pairing button has been clicked");

    $("#wine-display").removeClass("hidden");
    $("#search-options").addClass("hidden");

});


