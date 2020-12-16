import { GiphyDto } from './interfaces/giphy.dto';
import { getBetterGiphy, getGiphyUrl } from './mapper';

describe('Giphy mapper', () => {
  it('should return url prop of object', () => {
    const expected = 'https://giphy.com/gifs/queen-we-are-the-champions-1yjZXySg7tSohpcmUM';

    const obj = { url: expected };

    expect(getGiphyUrl(obj as Record<keyof GiphyDto, string>)).toBe(expected);
  });

  it('should return first giphy from a list', () => {
    const giphys = [
      {} as GiphyDto,
      {} as GiphyDto,
      {} as GiphyDto,
    ];

    const [expected] = giphys;

    expect(getBetterGiphy(giphys)).toBe(expected);
  });
});
