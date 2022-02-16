import axios, { AxiosPromise } from "axios";

interface HasId {
  id: string;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: string): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    }
    return axios.post(this.rootUrl, data);
  }
}
