import { Router } from "express";
import clientControllers from "../controllers/clientsController.js";

const route = Router();

route.post(
  "/clients",
  () => {
    console.log("entrei na rota");
  },
  clientControllers.create
);
//   .get("/clients", clientControllers.getAll)

export { route };

export default route;
