import { User } from "./models/User";

const testUser = () => {
  const user = new User({
    id: "1",
    name: "KKK",
    age: 100,
  });
  user.hello();
  user.fetch().then(() => {
    user.hello();
  });
  // user.save();
};
testUser();