import axios from 'axios';
import { getReasonPhrase } from 'http-status-codes';
import { GIPHY_API_KEY, GIPHY_API_URL } from 'src/common/config';
import { GiphyErrors } from './error.enum';
import { GiphyDto } from './interfaces/giphy.dto';

export const getGiphy = async (q: string): Promise<GiphyDto[]> => {
  try {
    const { data: { data } } = await axios.get(`${GIPHY_API_URL}/search`, { params: { q, api_key: GIPHY_API_KEY } });

    return data as GiphyDto[];
  } catch (err) {
    const { response: { status } } = err;

    switch (status) {
      case 400:
        err.message = GiphyErrors.BAD_REQUEST;
        break;
      case 403:
        err.message = GiphyErrors.FORBIDDEN;
        break;
      case 404:
        err.message = GiphyErrors.NOT_FOUND;
        break;
      case 429:
        err.message = GiphyErrors.TOO_MANY_REQUESTS;
        break;
      default:
        err.message = GiphyErrors.NOT_ONLINE;
        break;
    }

    err.name = getReasonPhrase(status || 500);

    throw err;
  }
};
