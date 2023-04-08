import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function handleErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.name === "ConflictError") {
    return res.status(httpStatus.CONFLICT).send({ message: error.message });
  }
  if (error.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({ message: error.message });
  }

  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send({ error: "InternalServerError", message: "Internal Server Error" });
}
