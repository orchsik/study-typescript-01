import { User } from "./models/User";

const testUser = () => {
  const user = new User({
    id: "1",
    name: "KKK",
    age: 100,
  });

  user.events.on("save", () => console.log("user saved"));
  user.events.on("test", () => console.log("test!!!"));
  user.events.trigger("test");

  user.sync
    .fetch(user.get("id"))
    .then(() => {
      user.hello();
    })
    .then(() => {
      user.save();
    });

  user.sync.fetch("3").then(({ data }) => {
    user.set(data);
    user.hello();
  });
};
testUser();
