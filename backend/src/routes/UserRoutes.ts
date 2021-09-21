import { Router } from "express";
import { loginUser, findUserInformations } from "../controllers/Users";
import verifyUserAuthentication from "../middlewares/verifyUserAuthentication";

const usersRoutes = Router();

usersRoutes.post("/login", loginUser);

usersRoutes.use(verifyUserAuthentication)

usersRoutes.get("/me", findUserInformations);

export default usersRoutes;
