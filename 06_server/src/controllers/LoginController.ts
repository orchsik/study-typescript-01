import { NextFunction, Request, Response } from "express";
import { bodyValidator, controller, get, post, use } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made!!!");
  next();
}

@controller("/auth")
export class LoginController {
  // @get("/")
  // add(a: number, b: number): number {
  //   return a + b;
  // }

  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="post">
          <div>
            <label>Email</label>
            <input name="email" />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <button>Submit</button>
        </form>
      `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
