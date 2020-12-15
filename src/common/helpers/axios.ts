import Axios, { AxiosInstance } from 'axios';

export const api = (baseURL: string): AxiosInstance => Axios.create({ baseURL });
