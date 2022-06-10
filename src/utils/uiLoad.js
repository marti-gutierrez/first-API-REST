// 2. seleccionar nuestro container (mount) donde pondremos las 3 imagenes de
// las apis
const appNode = document.querySelector('main.container-card');
// 3. crear un array donde estaran todas nuestras cards.
const allCards = [];

export const loadRandomMichis = async url_api =>
{
    const answer = await fetch(url_api);
    // 1. obtener elementos del array
    const answerJSON = await answer.json();
    // like1.src = answerJSON[0].url
    answerJSON.forEach(item => {
        const image = document.createElement('img');
        image.className = "card__img";
        image.src = item.url;
        image.alt = "imagen random de un gato";

        const iconHeart = document.createElement('i');
        iconHeart.className = "card__icon fa-regular fa-heart";

        const figureFather = document.createElement('fig');
        figureFather.className = "card__picture";

        const button = document.createElement('button');
        button.className = "card__button";
        button.id = "loveButton";

        const fatherContainer = document.createElement('section');
        fatherContainer.className = "card";

        figureFather.appendChild(image);
        button.appendChild(iconHeart);
        fatherContainer.append(figureFather,button);
        //2. los agregamos a nuestro array de elementos
        allCards.push(fatherContainer);
        //3. una vez que estan todas las cards la agregamos al DOM.
        appNode.append(...allCards);
    })
}

export const loadFavoritesMichis = async url =>{
    const answer = await fetch(url);
    const answerJSON = await answer.json();
    console.log(answerJSON);
}