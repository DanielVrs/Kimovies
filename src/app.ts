import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { routers } from "./routers";
import { handleErrors } from "./middlewares/handleErrors.middleware";

const app = express();
app.use(express.json());

app.use(routers);

app.use(handleErrors);

export default app;
