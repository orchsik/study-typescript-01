import { Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
});

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password) {
    res.send({
      email: email.toUpperCase(),
      password,
    });
  }
  res.send("You must provide an email and password");
});

export { router };
