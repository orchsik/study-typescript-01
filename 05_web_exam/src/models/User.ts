import axios from "axios";
import { Eventing } from "./Eventing";
interface UserProps {
  id: string;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing;

  constructor(private data?: UserProps) {
    this.events = new Eventing();
  }

  hello() {
    console.log(this.data);
  }

  get(propName: keyof UserProps): number | string {
    return this.data[propName];
  }

  set(update: UserProps) {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/users/${this.data.id}`
      );
      this.set(data);
    } catch (error) {
      console.error(error);
    }
  }

  async save() {
    try {
      const id = this.get("id");

      if (id) {
        axios.put(`http://localhost:3000/users/${id}`, this.data);
      } else {
        axios.post(`http://localhost:3000/users`, this.data);
      }

      this.events.trigger("save");
    } catch (error) {
      console.log(error);
    }
  }
}
