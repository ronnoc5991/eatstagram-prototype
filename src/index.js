import createDisplayCard from './display-card-factory.js'
import createARecipe from './recipe-factory.js'
const _ = require('lodash');

const cardDisplayContainer = document.getElementById("cardDisplayContainer");
const formContainer = document.getElementById("formContainer");
const newCardButton = document.getElementById("newCard");
newCardButton.addEventListener('click', toggleFormDisplay);
const randomCardButton = document.getElementById("randomCard");
randomCardButton.addEventListener('click', displayRandomCard);

const recipes = [];

function toggleFormDisplay() {
    if (formContainer.className == "hidden") { //if hidden, make active
        cardDisplayContainer.style.opacity = "0.5";
        formContainer.className = "active";
    } else if (formContainer.className == "active") { //if active, make hidden
        cardDisplayContainer.style.opacity = "1";
        formContainer.className = "hidden";
    }
}

function loadRecipeDisplay () {
    var i;
    for (i=0; i<recipes.length; ++i) {
        cardDisplayContainer.appendChild(createDisplayCard(recipes[i]));
    }
    //does not account for preexisting recipes to be on screen
    //need to remove them before attaching new recipe?
}

function displayRandomCard () {
    var randomRecipe = _.sample(recipes);
    console.log(randomRecipe.name);
    //toggle display of this form and populate it with the object returned from the recipes array
}


var newRecipe = createARecipe("Pizza", "Tipo 00 Flour, Yeast, Salt, Water, Time, San Marzano Tomatoes, Mozzarella, Pesto, Basil, Cherry Tomatoes", "../photos/pizza.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Falafel Wraps", "Falafel, Tzatziki, Tomaten, Cous-Cous, Wraps", "../photos/falafel.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Rijst Papiers", "Rijst papier, komkommer, wortel, rijst noodles, mango, munt, avocado", "../photos/rijstpapier3.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Spaghetti", "Spaghetti, sauce, meatballs, Homemade Garlic Bread", "../photos/spaghetti.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Quiche", "Lots of Groente, Liefde", "../photos/quiche.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Cookout", "Meat, Turksbrood, salade", "../photos/cookout.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Lemon Pasta", "Pasta, Lemon, Butter, Pepper, Oil", "../photos/lemon-pasta.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Chicken Parmigiana", "Chicken Breast, Egg, Panko, Parm, Seasonings, Pasta, Red Sauce", "../photos/chicken-parm.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Chicken Burger", "Chicken Breast, Seasonings, Bun, BBQ Sauce", "../photos/chicken-burger.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Lasagna", "Ricotta, Red Sauce, Lasagna Sheets, Egg, Parm, Seasonings, Mozzarella", "../photos/lasagna.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Risotto", "Arborio Rice, Onion, Garlic, Olive Oil, Tomato Paste, Canned Tomatoes, Mozzarella, Basil, Cherry Tomatoes", "../photos/risotto.JPG", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Fritata", "Eieren, Feta, Potato, Ui, Knoflook", "../photos/Fritata.jpeg", 1);
recipes.push(newRecipe);

var newRecipe = createARecipe("Tortilla", "Patatas, Cebolla, Huevos, Amor", "../photos/tortilla.JPG", 1);
recipes.push(newRecipe);

loadRecipeDisplay();



//needs an add recipe form that can take photos
//needs a random recipe feature that pulls up a random recipe
//how does it pull it up?  Can you click on a photo to make it larger?
//can we add several photos and scroll through them?
//tag features like a blog?  tag by lunch/dinner/italian/soup/vegetables etc.