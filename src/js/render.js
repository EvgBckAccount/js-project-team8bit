import boxicons from 'boxicons';
import 'boxicons/css/boxicons.min.css';


import { refs } from './refs';



export function renderArtistBioDetails(response) {
  const {
    strArtist,
    strArtistThumb,
    intFormedYear,
    intDiedYear,
    strGender,
    intMembers,
    strCountry,
    strBiographyEN,
    genres,
    albumsList,
  } = response;
  console.log(response);
  
  const indexNullText = `${response.intFormedYear}-${
    response.intDiedYear ? response.intDiedYear : 'present'
  }`;
console.log(albumsList);

  const textArray = [
    indexNullText,
    strGender,
    intMembers,
    strCountry,
    strBiographyEN,
  ];
  refs.artistName.textContent = strArtist;
  refs.artistPhoto.setAttribute('src', strArtistThumb);
  refs.artistDetailsInfo.forEach((elem, i) => {
    elem.textContent = textArray[i];
  });

  const genresMarkup = genres
    .map(
      genre => `<li class="genre">
        <p class="genre-text">${genre}</p>
      </li>`
    )
    .join('');
  refs.genresList.insertAdjacentHTML('beforeend', genresMarkup);

  const albumsMarkup = albumsList
    .map(({ strAlbum, tracks }) => {
      const tracksRendered = tracks
        .map(({ strTrack, intDuration, movie }) => {
          const videoCheck = movie
            ? `<i class="bx bx-youtube"><a href="${movie}"></a></i>`
            : '';
          return `
      <tr class="song">
                <td>${strTrack}</td>
                <td>${intDuration}</td>
                <td>${videoCheck}</td>
              </tr>
  `;
        })
        .join('');

      return `
    <li>
          <table class="album">
            <caption class="artist-album-heading">
              ${strAlbum}
            </caption>
            <thead>
              <tr id="list-headers">
                <th>Track</th>
                <th>Time</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              ${tracksRendered}
            </tbody>
          </table>
        </li>
    `;
    })
    .join('');

  refs.albumsList.insertAdjacentHTML('afterbegin', albumsMarkup);
}
