import { User } from "./models/User";

const testUser = () => {
  const user = new User({
    id: "1",
    name: "ZZZ",
    age: 100,
  });
  user.hello();

  user.events.on("save", () => console.log("user saved"));
  user.events.on("test", () => console.log("test!!!"));
  user.events.trigger("test");

  user.sync
    .fetch(user.attributes.get("id"))
    .then(() => {
      user.hello();
    })
    .then(() => {
      user.sync.save({
        id: user.attributes.get("id"),
        name: user.attributes.get("name"),
        age: user.attributes.get("age"),
      });
    });

  setTimeout(() => {
    user.sync.fetch("3").then(({ data }) => {
      user.attributes.set(data);
      user.hello();
    });
  }, 1000 * 3);
};
testUser();
