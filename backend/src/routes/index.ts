import { Router } from "express";
import usersRoutes from "./UserRoutes";
import officeRoutes from "./OfficeRoutes";

const routes = Router();

routes.use("/user", usersRoutes);
routes.use("/office", officeRoutes);

export default routes;
