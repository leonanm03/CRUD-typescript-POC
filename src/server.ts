import express from "express";
import routes from "./routers/routes.js";
import "express-async-errors";
import handleErrors from "./middlewares/errorMiddleware.js";

const server = express();

server.use(express.json());

server.use(routes);
server.use(handleErrors);

const PORT = Number(process.env.PORT) || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
