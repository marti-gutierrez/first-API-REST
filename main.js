/**
 * en esta url el endpoints es: /images/search o /images
 */
const API = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=0ece5eaa-08dd-412b-9389-476feb8956b6';

const restAPI = async url_api =>
{
    const answer = await fetch(url_api);
    const answerJSON = await answer.json();
    console.log(answerJSON);
    imagePrincipal.src = answerJSON[0].url;
}

const changeIMage = async () =>{
    restAPI(API);
}

restAPI(API);

newImage.addEventListener('click',changeIMage);