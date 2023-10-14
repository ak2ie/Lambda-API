import serverlessExpress from "@vendia/serverless-express";
import app from "./router";
require("dotenv").config();

if (process.env.NODE_ENV === `develop`) app.listen(3000);

export const handler = serverlessExpress({ app });
