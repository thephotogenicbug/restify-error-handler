import express from "express";
import {
  BadRequestError,
  NotFoundError,
  InternalServerError,
  RestifyErrorHandler,
} from "./index.mjs";

const app = express();

app.get("/bad-request", (req, res, next) => {
  next(new BadRequestError("This is a bad request"));
});

app.get("/not-found", (req, res, next) => {
  next(new NotFoundError("Resource not found"));
});

app.get("/internal-error", (req, res, next) => {
  next(new InternalServerError("Internal server error"));
});

app.use(RestifyErrorHandler);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
