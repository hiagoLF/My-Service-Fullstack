import "./config/env";
import "reflect-metadata";
import "./config/database";
import app from "./config/serverApp";

app.listen(8000, () => console.log("Server is runnig"));
