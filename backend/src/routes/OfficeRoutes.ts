import { Router } from "express";
import createNewOffice from "../controllers/Offices/createNewOffice";
import findMyOffices from "../controllers/Offices/findMyOffices";
import verifyUserAuthentication from "../middlewares/verifyUserAuthentication";

const officeRoutes = Router();

officeRoutes.use(verifyUserAuthentication);

officeRoutes.post('/', createNewOffice)

officeRoutes.get("/contracted", findMyOffices);

export default officeRoutes;
