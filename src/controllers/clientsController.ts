import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ClientInput } from "../protocols/protocols";
import services from "../services/clientsServices.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const { name, email, cpf, phone, address } = req.body as ClientInput;
  try {
    await services.create({ name, email, cpf, phone, address });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const clients = await services.getAll();
    return res.status(httpStatus.OK).send(clients);
  } catch (error) {
    next(error);
  }
}

async function updateAddress(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const address = req.body.address as string;
  try {
    await services.updateAddress(parseInt(id), address);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}

async function deleteClient(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    await services.deleteClient(parseInt(id));
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
  getAll,
  updateAddress,
  deleteClient,
};
