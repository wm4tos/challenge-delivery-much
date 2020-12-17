import { getReasonPhrase } from 'http-status-codes';
import { error } from './error';

describe('Error helper', () => {
  it('should return not found error', () => {
    const err = error(getReasonPhrase(404));

    const expected = { message: getReasonPhrase(404), status: 404 };

    expect(err).toStrictEqual(expected);
  });

  it('should return internal server error error', () => {
    const err = error();

    const expected = { message: getReasonPhrase(500), status: 500 };

    expect(err).toStrictEqual(expected);
  });
});
