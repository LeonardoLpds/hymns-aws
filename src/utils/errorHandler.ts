import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res
    .status(500)
    .json({ errors: [{ msg: "something went wrong", nestedErrors: err }] });
}

export function asyncErrorMiddleware(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}
