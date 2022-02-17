import { Attributes } from "../Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id: string;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  attributes: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attributes<UserProps>(data);
  }

  hello() {
    console.log(this.attributes);
  }
}
