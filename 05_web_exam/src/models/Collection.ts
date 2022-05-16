import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, I> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string, private desirialize: (json: I) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((json: I) => {
        this.models.push(this.desirialize(json));
      });

      this.events.trigger("change");
    });
  }
}
