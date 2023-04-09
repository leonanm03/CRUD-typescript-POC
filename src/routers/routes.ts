import { Router } from "express";
import clientControllers from "../controllers/clientsController.js";
import {
  validateBody,
  validateParams,
} from "../middlewares/schemaValidation.js";
import {
  clientIdSchema,
  createClientSchema,
  updateClientAddressSchema,
} from "../schemas/Clients.js";

const route = Router();

route
  .post("/clients", validateBody(createClientSchema), clientControllers.create)
  .get("/clients", clientControllers.getAll)
  .put(
    "/clients/:id",
    validateParams(clientIdSchema),
    validateBody(updateClientAddressSchema),
    clientControllers.updateAddress
  )
  .delete(
    "/clients/:id",
    validateParams(clientIdSchema),
    clientControllers.deleteClient
  );

export default route;
