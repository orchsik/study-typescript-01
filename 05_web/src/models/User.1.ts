import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #1
// Accept dependencies as second constructor argument
// [ex] const user = new User({ id: 1 }, new Eventing());
export class User {
  constructor(private data: UserProps, private events: Eventing) {}

  get(propName: keyof UserProps): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post
      axios.post(`http://localhost:3000/users`, this.data);
    }
  }
}
