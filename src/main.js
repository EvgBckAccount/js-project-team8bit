import 'modern-normalize/modern-normalize.css';
import { renderArtistBioDetails } from './js/render.js';
import { getAlbumsDetails } from './js/axios.js';
import { getArtistDetails } from './js/axios.js';
document.addEventListener('DOMContentLoaded', async () => {
    // const artistData = await getArtistDetails("65ada227af9f6d155db46908");
const albumsData = await getAlbumsDetails("65ada227af9f6d155db46908");
    // renderArtistBioDetails(artistData);
    renderArtistBioDetails(albumsData);
    const element = document.getElementById('artist-details-modal');

console.log('Видимая высота:', element.offsetHeight);
console.log('Полная высота контента:', element.scrollHeight);

if (element.scrollHeight > element.offsetHeight) {
    console.log('Контент превышает видимую область — нужен скрол');
    element.style.overflowY = 'scroll';
    element.style.overflowX = 'hidden';
}

});


 
