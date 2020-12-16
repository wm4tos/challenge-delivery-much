import { prop } from 'ramda';
import { GiphyDto } from './interfaces/giphy.dto';

export const getGiphyUrl = prop<keyof GiphyDto, string>('url');

export const getBetterGiphy = (giphys: GiphyDto[]): GiphyDto => giphys[0];
