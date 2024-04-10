import axios, {AxiosInstance} from 'axios';
import {config} from '../../config';

class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.api.base,
    });
  }

  public get<T>({endpoint}: {endpoint: string}): Promise<T> {
    return this.axiosInstance.get(endpoint);
  }

  public post<T>({endpoint, data}: {endpoint: string; data: any}): Promise<T> {
    return this.axiosInstance.post(endpoint, data);
  }
}

export const api = new Api();
