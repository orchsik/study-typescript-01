import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Only accept properties into constructor. Hard code dependencies as class properties
export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
