type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
    const root = document.getElementById("root");
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (handlers?.length) {
      handlers.forEach((callback) => {
        callback();
      });
    }
  };
}
