import { Router } from "express";
import verifyUserAuthentication from "../middlewares/verifyUserAuthentication";
import officeControllers from "../controllers/Offices";

const officeRoutes = Router();

officeRoutes.get("/:id", officeControllers.findOfficeById);

officeRoutes.use(verifyUserAuthentication);

officeRoutes.post("/", officeControllers.createNewOffice);

officeRoutes.put("/subscribe/:officeId", officeControllers.subscribeUserToOffice)

// officeRoutes.get("/", officeControllers.findMyOffices);

export default officeRoutes;
