
//store values of ingredients in Array
var ingredientsArray = [];

//get value of ingredients from input field
//var IngredientEl = document.getElementById("ingredient");

//add ingredient to ingredients Array
//ingredientsArray.push("ingredient");


document.getElementById("addIngrBtn").onclick = function() {

    let ingredient = document.getElementById("ingredient").value;
    //let newItem = '<li id="ing_rice"> <input id="button" type="checkbox"><label for="checkbox12">Rice</label> </li>';
    let newItem = document.createElement("li")
    newItem.appendChild(document.createTextNode(ingredient));
    document.getElementById("ingredientList").appendChild(newItem);

    document.getElementById("ingredient").value = "";
}

//Clear Button
document.getElementById("clearIngrBtn").onclick = function() {
    let parent = document.getElementById("ingredientList");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}