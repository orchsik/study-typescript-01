import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

// Sync is a generic class to customize the type of 'data' coming into save()
export class Sync {
  constructor(
    // http://localhost:3000/users
    public rootUrl: string
  ) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
