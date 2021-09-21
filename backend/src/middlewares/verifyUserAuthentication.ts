import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import getUserById from "../services/users/getUserById";

export default async function verifyUserAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(400).json({ error: "no authorization header provided" });
  }
  const parts = authHeader.split(" ");
  if (parts.length !== 2) {
    return res.status(400).json({ error: "malformated authorization header" });
  }
  if (parts[0] !== "Bearer") {
    return res.status(400).json({ error: "inappropriate sintax" });
  }
  jwt.verify(parts[1], process.env.JWT_SECRET || "", async (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: "invalid token",
        details: err,
      });
    }

    const user = await getUserById(decoded?.sub || "");

    req.user = user;

    return next();
  });
}
