import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  constructor(private attrs: UserProps) {
    super(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  hello() {
    console.table(this.attrs);
  }
}
