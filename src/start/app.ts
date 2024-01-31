import express, { json } from "express";
import morgan from "morgan";
import employeesRouter from "../routers/employees.routes";

const app = express();

app.use(json());
app.use(morgan("dev"));

const baseUrl = '/api';
app.use(baseUrl, employeesRouter);

export default app;
