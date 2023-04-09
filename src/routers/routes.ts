import { Router } from "express";
import clientControllers from "../controllers/clientsController.js";
import { validateBody } from "../middlewares/schemaValidation.js";
import { createClientSchema } from "../schemas/Clients.js";

const route = Router();

route
  .post("/clients", validateBody(createClientSchema), clientControllers.create)
  .get("/clients", clientControllers.getAll)
  .put("/clients/:id", clientControllers.updateAddress)
  .delete("/clients/:id", clientControllers.deleteClient);

export default route;
