import express from "express";
import morgan from "morgan";
import employeesRouter from "../routes/employees.routes";
import error from "../middleware/error";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const baseUrl = '/api';
app.use(baseUrl, employeesRouter);

app.use(error);

export default app;
