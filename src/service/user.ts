import { api } from './https/http'

class User {
  public registerUser<T>(data: T): Promise<T> {
    return api.requestHandler({
      method: 'POST',
      endpoint: 'user',
      body: data
    })
  }
}

export const user = new User()
