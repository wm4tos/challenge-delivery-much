import { prop } from 'ramda';
import { GiphyDto } from './interfaces/giphy.dto';

export const getGiphyUrl = prop('url');

export const getBetterGiphy = (giphys: GiphyDto[]): GiphyDto => giphys[0];
