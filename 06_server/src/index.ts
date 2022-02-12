import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
