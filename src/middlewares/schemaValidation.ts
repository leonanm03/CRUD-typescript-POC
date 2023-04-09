import { NextFunction, Request, Response } from "express";
import err from "../errors/errors.js";
import { ObjectSchema } from "joi";

export function validateParams(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail: any) => detail.message);
      throw err.badRequestError(errors);
    }
    next();
  };
}

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail: any) => detail.message);
      throw err.badRequestError(errors);
    }
    next();
  };
}
