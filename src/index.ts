import express from "express";
import serverless from "serverless-http";
import router from "./router";
import { errorHandler } from "./utils/errorHandler";

const app = express();
app.use(express.json());

app.use(router);

app.use(errorHandler);

module.exports.handler = serverless(app);
export default app;
