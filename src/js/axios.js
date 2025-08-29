import axios from 'axios';
axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

//Artist Details Modal - backend request function
export async function getArtistDetails(id) {
  const details = await axios.get('/artists/' + id)
  console.log(details);
  return details.data;
}

export async function getAlbumsDetails(id) {
  const details = await axios.get('/artists/' + id + '/albums')
  console.log(details);
  return details.data;
}
