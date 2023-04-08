import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ClientInput } from "protocols/protocols";
import services from "../services/clientsServices.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name, email, cpf, phone, address } = req.body as ClientInput;
  console.log("entrei no controller");
  try {
    await services.create({ name, email, cpf, phone, address });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default {
  create,
};
