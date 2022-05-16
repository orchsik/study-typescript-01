import { User } from "./models/User";

const collection = User.buildUserCollection();
collection.on("change", () => console.log(collection));
collection.fetch();

const testSave = () => {
  const user = new User({ id: "1", name: "new record", age: 1 });
  user.on("save", () => {
    console.log("save !!!");
    user.hello();
  });
  user.save();
};

const testFetch = () => {
  const user = new User({ id: "1" });
  user.on("fetch", () => {
    console.log("fetch !!!");
    user.hello();
  });
  user.fetch();
};

// testSave();
// testFetch();

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
