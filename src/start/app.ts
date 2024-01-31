import express, { json } from "express";
import morgan from "morgan";

const app = express();

app.use(json());
app.use(morgan("dev"));

app.get("/ping", (req, res) => {
  res.send("PONG");
});

export default app;
