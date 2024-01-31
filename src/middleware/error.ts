import { NextFunction, Request, Response } from "express";

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err, err.message);
  res.status(500).send('SOMETHING FAILED :/');
};

export default error;