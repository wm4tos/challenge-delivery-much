import { Callback, RedisClient as Client } from 'redis';

export interface RedisClient extends Client {
  setAsync(key: string, value: string, cb?: Callback<'OK'>): Promise<boolean>;
  setAsync(key: string, value: string, flag: string, cb?: Callback<'OK'>): Promise<boolean>;
  setAsync(key: string, value: string, mode: string, duration: number, cb?: Callback<'OK' | undefined>): Promise<boolean>;
  setAsync(key: string, value: string, mode: string, duration: number, flag: string, cb?: Callback<'OK' | undefined>): Promise<boolean>;
  setAsync(key: string, value: string, flag: string, mode: string, duration: number, cb?: Callback<'OK' | undefined>): Promise<boolean>;
  getAsync(key:string): Promise<string>;
}
