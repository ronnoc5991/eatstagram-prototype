import createDisplayCard from './display-card-factory.js'

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


cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());
cardDisplayContainer.appendChild(createDisplayCard());




// needs a logo
//needs an add recipe form that can take photos
//needs a random recipe feature that pulls up a random recipe
//how does it pull it up?  Can you click on a photo to make it larger?
//can we add several photos and scroll through them?
//tag features like a blog?  tag by lunch/dinner/italian/soup/vegetables etc.