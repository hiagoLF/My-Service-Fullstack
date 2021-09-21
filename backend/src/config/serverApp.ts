import 'express-async-errors';
import express from "express";
import cors from "cors";
import routes from "../routes/index";
import internalServerError from "../middlewares/internalServerError";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(internalServerError);

export default app;
