import { Router } from "express";
import { usersRoute } from "./users.router";
import { loginRoute } from "./login.router";
import { categoriesRoute } from "./categories.router";
import { realStatesRoute } from "./realEstates.router";
import { schedulesRoute } from "./schedules.router";

export const routers: Router = Router();

routers.use("/users", usersRoute);

routers.use("/login", loginRoute);

routers.use("/categories", categoriesRoute);

routers.use("/realEstate", realStatesRoute);

routers.use("/schedules", schedulesRoute);
