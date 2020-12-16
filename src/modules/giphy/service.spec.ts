import axios from 'axios';
import { getReasonPhrase } from 'http-status-codes';
import { GiphyErrors } from './error.enum';
import { GiphyDto } from './interfaces/giphy.dto';
import { getGiphy } from './service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Giphy service', () => {
  it('should get giphy correctly', () => {
    const expected = [{} as GiphyDto];

    mockedAxios.get.mockResolvedValue({ data: { data: expected } });

    expect(getGiphy('test')).resolves.toStrictEqual(expected);
  });

  it('should reject with bad request error', () => {
    const status = 400;
    const expected = { name: getReasonPhrase(status), message: GiphyErrors.BAD_REQUEST };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getGiphy('test')).rejects.toMatchObject(expected);
  });

  it('should reject with forbidden error', () => {
    const status = 403;
    const expected = { name: getReasonPhrase(status), message: GiphyErrors.FORBIDDEN };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getGiphy('test')).rejects.toMatchObject(expected);
  });

  it('should reject with not found error', () => {
    const status = 404;
    const expected = { name: getReasonPhrase(status), message: GiphyErrors.NOT_FOUND };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getGiphy('test')).rejects.toMatchObject(expected);
  });

  it('should reject with too many requests error', () => {
    const status = 429;
    const expected = { name: getReasonPhrase(status), message: GiphyErrors.TOO_MANY_REQUESTS };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getGiphy('test')).rejects.toMatchObject(expected);
  });

  it('should reject with internal server error', () => {
    const status = 500;
    const expected = { name: getReasonPhrase(status), message: GiphyErrors.NOT_ONLINE };

    mockedAxios.get.mockRejectedValue({ response: { status } });

    expect(getGiphy('test')).rejects.toMatchObject(expected);
  });
});
