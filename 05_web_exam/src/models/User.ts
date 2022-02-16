import axios from "axios";

interface UserProps {
  id: string;
  name?: string;
  age?: number;
}

type Callback = () => void;
export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data?: UserProps) {}

  hello() {
    console.log(this.data);
  }

  get(propName: keyof UserProps): number | string {
    return this.data[propName];
  }

  set(update: UserProps) {
    Object.assign(this.data, update);
  }

  on(eventName: string, cb: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(cb);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string) {
    const callbaks = this.events[eventName];
    if (!callbaks || !callbaks.length) {
      return;
    }
    callbaks.forEach((cb) => cb());
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

      this.trigger("save");
    } catch (error) {
      console.log(error);
    }
  }
}
