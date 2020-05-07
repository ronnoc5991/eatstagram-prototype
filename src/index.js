import createDisplayCard from './display-card-factory.js'
import createARecipe from './recipe-factory.js'

const cardDisplayContainer = document.getElementById("cardDisplayContainer");
const formContainer = document.getElementById("formContainer");
const newCardButton = document.getElementById("newCard");
newCardButton.addEventListener('click', toggleFormDisplay);

function toggleFormDisplay() {
    if (formContainer.className == "hidden") { //if hidden, make active
        cardDisplayContainer.style.opacity = "0.5";
        formContainer.className = "active";
    } else if (formContainer.className == "active") { //if active, make hidden
        cardDisplayContainer.style.opacity = "1";
        formContainer.className = "hidden";
    }
}

// var newRecipe = createARecipe();
// cardDisplayContainer.appendChild(createDisplayCard(newRecipe));

var newRecipe = createARecipe("Pizza", "Pizza ingredients dude", "../photos/pizza.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));

var newRecipe = createARecipe("Falafel Wraps", "Falafel, Tzatziki, Tomaten, Cous-Cous, Wraps", "../photos/falafel.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));


var newRecipe = createARecipe("Rijst Papiers", "Rijst papier, komkommer, wortel, rijst noodles, mango, munt, avocado", "../photos/rijstpapier3.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));

var newRecipe = createARecipe("Spaghetti", "Spaghetti, sauce, meatballs, Homemade Garlic Bread", "../photos/spaghetti.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));

var newRecipe = createARecipe("Quiche", "Lots of Groente, Liefde", "../photos/quiche.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));

var newRecipe = createARecipe("Cookout", "Meat, Turksbrood, salade", "../photos/cookout.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));

var newRecipe = createARecipe("Lemon Pasta", "Pasta, Lemon, Butter, Pepper, Oil", "../photos/lemon-pasta.JPG", 1);
cardDisplayContainer.appendChild(createDisplayCard(newRecipe));





// needs a logo
//needs an add recipe form that can take photos
//needs a random recipe feature that pulls up a random recipe
//how does it pull it up?  Can you click on a photo to make it larger?
//can we add several photos and scroll through them?
//tag features like a blog?  tag by lunch/dinner/italian/soup/vegetables etc.