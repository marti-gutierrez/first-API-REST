/**
 * en esta url el endpoints es: /images/search o /images
 */
const API = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=0ece5eaa-08dd-412b-9389-476feb8956b6';

// 2. seleccionar nuestro container (mount) donde pondremos las 3 imagenes de
// las apis
const appNode = document.querySelector('figure.card__picture');
// 3. crear un array donde estaran todas nuestras cards.
const allCards = [];

const restAPI = async url_api =>
{
    const answer = await fetch(url_api);
    // 1. obtener elementos del array
    const answerJSON = await answer.json();
    answerJSON.forEach(item => {
        const image = document.createElement('img');
        image.className = "card__img";
        image.src = item.url;
        image.alt = "imagen random de un gato";
        const iconHeart = document.createElement('i');
        iconHeart.className = "card__icon";
    })
}


const changeIMage = async () =>{
    restAPI(API);
}

restAPI(API);

newImage.addEventListener('click',changeIMage);