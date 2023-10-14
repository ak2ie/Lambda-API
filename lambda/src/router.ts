import express, { NextFunction, Request, Response } from "express";
import { Hello } from "./router_js";
import { Logger } from "@aws-lambda-powertools/logger";
import "express-async-errors";

const logger = new Logger({
  serviceName: "serverlessAirline",
});

const error = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  return res.status(500).send("something went wrong!");
};

const app = express();

app.get("/hello", (_, req) => {
  logger.info("receive request");
  console.log("TS: " + process.env.ENV_TEST);
  Hello(_, req);
});

app.get("/async", async (_, req) => {
  //   return new Promise((resolve, _) => {
  //     setTimeout(() => {
  //       console.log("fire error");
  //       throw new Error("throw error");
  //       req.send("Hello!");
  //       //   resolve("hello");
  //     }, 3000);
  //   });
  throw new Error("aaa");
});

app.use(error); // エラーハンドラーはルーティングの後に書く必要あり

export default app;
