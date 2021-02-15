import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import goodsRouter from "./api/v1/goodsRouter.js"
import messageRouter from "./api/v1/messageRouter.js"
import userProfileRouter from "./api/v1/userProfileRouter.js"

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here
rootRouter.use("/api/v1/userprofile", userProfileRouter); //place your server-side routes here
rootRouter.use("/api/v1/goods", goodsRouter)
rootRouter.use("/api/v1/messages", messageRouter)
rootRouter.use("/api/v1/messages", messageRouter)

export default rootRouter;
