import axios from 'axios';

export default async function searchImage(queryImg, currentPage) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'nnKU6nPDzY3KzcUccSsntrotYQOV49QahVuopMsamZs',
      query: queryImg,
      page: currentPage,
    },
  });
  return response.data;
}
