import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #2
// Only accept dependencies into constructor
// Define a static class method to preconfigure
// User and assign properties afterwards
// [ex] const user = User.fromData({ id:1 })
export class User {
  static fromData(data: UserProps) {
    const user = new User(new Eventing());
    user.set(data);
    return user;
  }

  private data: UserProps;

  constructor(private events: Eventing) {}

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
