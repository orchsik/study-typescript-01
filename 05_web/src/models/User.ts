import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

// Only accept properties into constructor. Hard code dependencies as class properties
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
