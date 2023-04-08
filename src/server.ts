import express, { json } from "express";
import routes from "./routers/routes.js";
import "express-async-errors";
import cors from "cors";
import handleErrors from "./middlewares/errorMiddleware.js";

const server = express();
server.use(json());

server.use(cors());
server.use(routes);
server.use(handleErrors);

const PORT = Number(process.env.PORT) || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
