import { Router } from "express";
import clientControllers from "../controllers/clientsController.js";

const route = Router();

route.post(
  "/clients",
  clientControllers.create
);
//   .get("/clients", clientControllers.getAll)

export { route };

export default route;
