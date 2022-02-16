import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserProps {
  id: string;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data?: UserProps) {}

  hello() {
    console.log(this.data);
  }

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.data[propName];
  }

  set(update: UserProps) {
    Object.assign(this.data, update);
  }

  save() {
    this.sync
      .save(this.data)
      .then(() => {
        this.events.trigger("save");
      })
      .catch((err) => console.log(err));
  }
}
