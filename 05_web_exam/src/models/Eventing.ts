type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, cb: Callback) => {
    const handlers = this.events[eventName] || [];
    handlers.push(cb);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string) => {
    const callbaks = this.events[eventName];
    if (!callbaks || !callbaks.length) {
      return;
    }
    callbaks.forEach((cb) => cb());
  };
}
