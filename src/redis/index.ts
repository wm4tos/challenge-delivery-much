import { promisifyAll } from 'bluebird';
import { createClient, Multi, RedisClient as Client } from 'redis';
import { REDIS_URL } from '../common/config';
import { RedisClient } from './interface';

promisifyAll(Client.prototype);
promisifyAll(Multi.prototype);

export const client = createClient({ url: REDIS_URL }) as RedisClient;
