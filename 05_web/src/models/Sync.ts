import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

// Sync is a generic class to customize the type of 'data' coming into save()
export class Sync<T extends HasId> {
  constructor(
    // http://localhost:3000/users
    public rootUrl: string
  ) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
