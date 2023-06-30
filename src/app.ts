import express from "express";
import questionController from "./controllers/questionController";
import userController from "./controllers/userController";
const app = express();
app.use(express.json());
app.use("/question", questionController);
app.use("/user", userController);
export default app;
