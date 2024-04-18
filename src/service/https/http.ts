import axios, { type AxiosInstance } from 'axios'
import { config } from '../../config'
type http = 'GET' | 'POST'
class Api {
  private readonly axiosInstance: AxiosInstance

  constructor () {
    this.axiosInstance = axios.create({
      baseURL: config.api.base
    })
  }

  private get<T>(endpoint: string): Promise<T> {
    return this.axiosInstance.get(endpoint)
  }

  private post<T>(endpoint: string, data: T): Promise<T> {
    return this.axiosInstance.post(endpoint, data)
  }

  public requestHandler<T>({ method, endpoint, body }: { method: http, endpoint: string, body: T }): Promise<T> {
    switch (method) {
      case 'GET':
        return this.get(endpoint)
      case 'POST':
        return this.post(endpoint, body)
      default:
        return this.get(endpoint)
    }
  }
}

export const api = new Api()
