import { Router } from "express";
import usersRoutes from "./UserRoutes";
import officeRoutes from "./OfficeRoutes";

const routes = Router();

routes.use("/office", officeRoutes);
routes.use("/user", usersRoutes);

export default routes;
