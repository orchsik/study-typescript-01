import axios from "axios";
import { User } from "./models/User";

const user = new User({ name: "MAGIC SHOW", age: 1000 });
user.events.on("change", () => {
  console.log("change!");
});
user.events.trigger("change");

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.attributes.get('id')
// user.attributes.get('name')
// user.attributes.get('age')
// user.sync.save()
// // Before...
// user.save()

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.events.on("change", () => {
//   console.log("change!");
// });
// user.events.trigger("change");

// const user = new User({ name: "MAGIC SHOW", age: 1000 });
// user.save();
// const user = new User({ id: 1 });
// user.set({ name: "aaa", age: bbb });
// user.save();

// const user = new User({ id: 1 });
// user.fetch();
// setTimeout(() => {
//   console.log(user);
// }, 1000 * 4);

// axios.post("http://localhost:3000/users", {
//   name: "myname",
//   age: 20,
// });
// axios.get("http://localhost:3000/users");

// const user = new User({
//   name: "khc",
//   age: 32,
// });
// user.on("change", () => {
//   console.log("Change #1");
// });
// user.on("change", () => {
//   console.log("Change #2");
// });
// user.on("save", () => {
//   console.log("Save was triggered");
// });
// user.trigger("save");
