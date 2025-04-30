import axios from 'axios';
import { Image } from './common-types';

interface SearchImage {
  results: Image[];
  total_pages: number;
}

export default async function searchImage(
  queryImg: string,
  currentPage: number
): Promise<SearchImage> {
  const response = await axios.get<SearchImage>('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'nnKU6nPDzY3KzcUccSsntrotYQOV49QahVuopMsamZs',
      query: queryImg,
      page: currentPage,
    },
  });
  return response.data;
}
