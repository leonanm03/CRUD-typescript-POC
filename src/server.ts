import express, { json } from "express";
import cors from "cors";
import routes from "./routers/routes.js";
import "express-async-errors";

const server = express();
server.use(json());
server.use(cors());
server.use(routes);
// server.use();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});