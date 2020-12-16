import axios from 'axios';
import { getReasonPhrase } from 'http-status-codes';
import { GIPHY_API_KEY, GIPHY_API_URL } from 'src/common/config';
import { GiphyDto } from './interfaces/giphy.dto';

export const getGiphy = async (q: string): Promise<GiphyDto[]> => {
  try {
    const { data: { data } } = await axios.get(`${GIPHY_API_URL}/search`, { params: { q, api_key: GIPHY_API_KEY } });

    return data as GiphyDto[];
  } catch (err) {
    const { response: { status } } = err;

    err.name = getReasonPhrase(status);

    throw err;
  }
};
