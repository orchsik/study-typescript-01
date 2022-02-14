import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";
import { router as controlerRouter } from "./controllers/decorators";
import "./controllers/LoginController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["aaa"] }));
app.use(router);
app.use(controlerRouter);

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
