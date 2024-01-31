import express, { json } from "express";
import morgan from "morgan";
import employeesRouter from "../routes/employees.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const baseUrl = '/api';
app.use(baseUrl, employeesRouter);

export default app;
