const createDisplayCard = () => {
    const displayCard = document.createElement('div');
    displayCard.className = "display-card";

    const displayCardInner = document.createElement('div');
    displayCardInner.className = "display-card-inner";
    displayCard.appendChild(displayCardInner);

    const displayCardFront = document.createElement('div');
    displayCardFront.className = "display-card-front";
    displayCardInner.appendChild(displayCardFront);

    const frontImage = document.createElement('IMG');
    frontImage.src = "https://source.unsplash.com/random/308x300";
    displayCardFront.appendChild(frontImage);

    const frontText = document.createElement('div');
    frontText.className = "front-text";
    frontText.innerHTML = '<h1>Pizza</h1>'
    displayCardFront.appendChild(frontText);

    const displayCardBack = document.createElement('div');
    displayCardBack.className = "display-card-back";
    displayCardBack.innerHTML = '<h1>Pizza</h1> <p>Ingredients</p> <p>Flour, Water, Yeast, Salt, Patience, Tomato Sauce, Mozzarella, Pesto, Basil</p>'
    displayCardInner.appendChild(displayCardBack);
    
    return displayCard
}

export default createDisplayCard;