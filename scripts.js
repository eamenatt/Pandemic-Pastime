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
    }

    document.getElementById("formID").addEventListener("submit", function (e) {
        e.preventDefault();
        return false;
    });

    //store values of ingredients in Array

    $(".button").click(function () {
        var list = document.getElementById('ingredientList').childNodes;
        var ingredientsArray = [];
        for (var i = 0; i < list.length; i++) {
            var arrValue = list[i].innerHTML;

            ingredientsArray.push(arrValue);
        }
        alert(ingredientsArray);
    });


    var listItems = document.getElementById('ingredientList').getElementsByTagName('li');

    //     ingredientsArray = map(listItems, getText);

    // function map(arrayLike, fn) {
    //     var ret = [], i = -1, len = arrayLike.length;
    //     while (++i < len) ret[i] = fn(arrayLike[i]);
    //     return ret;
    // }

    // function getText(node) {
    //     if (node.nodeType === 3) return node.data;
    //     var txt = '';
    //     if (node = node.firstChild) do {
    //         txt += getText(node);
    //     } while (node = node.nextSibling);
    //     return txt;
    // }

    // Recipe search button query 
    // Hidden class will hide or display divs

    $("#recipe-query").on("click", function () {
        console.log("Recipe search button has been clicked");

        $("#recipe-display").removeClass("hidden");
        $("#search-options").addClass("hidden");

    });
});
