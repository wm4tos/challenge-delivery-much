import { REDIS_EXPIRES } from 'src/common/config';
import { client } from 'src/redis';

export const save = (
  key: string, value: unknown,
): boolean => client.set(key, JSON.stringify(value), 'EX', Number.parseInt(REDIS_EXPIRES));

export const get = async (key: string): Promise<any> => {
  const data = await client.getAsync(key);

  if (data) return JSON.parse(data);

  return null;
};
