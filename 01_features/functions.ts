const add = (a: number, b: number) => {
  return a + b;
};

const throwError = (msg: string): never => {
  throw new Error(msg);
};
