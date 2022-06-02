const API = 'https://api.thecatapi.com/v1/images/search';

const restAPI = async url_api =>
{
    const answer = await fetch(url_api);
    const answerJSON = await answer.json();
    imagePrincipal.src = answerJSON[0].url;
}

const changeIMage = async () =>{
    restAPI(API);
}

restAPI(API);

newImage.addEventListener('click',changeIMage);
