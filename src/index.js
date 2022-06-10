/**
 * en esta url el endpoints es: /images/search o /images
 * !Partes que faltan mejorar
 * !1. crear una función que modifique el DOM para crear una tarjeta de gatitos
 * !2. concatenar la url para los endPoints y parameters
 */
const API = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=0ece5eaa-08dd-412b-9389-476feb8956b6';
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=0ece5eaa-08dd-412b-9389-476feb8956b6';

import {loadFavoritesMichis } from "./utils/uiLoad.js";

const changeIMage = async () =>{
    const module = await import('./utils/uiLoad.js');
    module.loadRandomMichis(API);
}

// loadRandomMichis(API);
loadFavoritesMichis(API_URL_FAVORITES);

btnReload.addEventListener('click',changeIMage);