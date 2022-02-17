import { User } from "./models/User";

const user = new User({ id: "1", name: "new record", age: 0 });
user.on("save", () => user.hello());
user.save();

// const testUser = () => {
//   const user = new User({
//     id: "1",
//     name: "ZZZ",
//     age: 100,
//   });
//   user.hello();

//   user.on("save", () => console.log("user saved"));
//   user.on("test", () => console.log("test!!!"));
//   user.trigger("test");

//   user.sync
//     .fetch(user.get("id"))
//     .then(() => {
//       user.hello();
//     })
//     .then(() => {
//       user.sync.save({
//         id: user.get("id"),
//         name: user.get("name"),
//         age: user.get("age"),
//       });
//     });

//   setTimeout(() => {
//     user.sync.fetch("3").then(({ data }) => {
//       user.set(data);
//       user.hello();
//     });
//   }, 1000 * 10);
// };
// testUser();
