import { Request, Response } from "express";
import pool from "../start/db";

export const getEmployees = async (req: Request, res: Response) => {
  const [result] = await pool.query('SELECT "pong"');
  res.json(result);
};

export const getEmployee = (req: Request, res: Response) => {
  res.send("get one employee");
};

export const createEmployee = (req: Request, res: Response) => {
  res.send("create employees");
};

export const updateEmployee = (req: Request, res: Response) => {
  res.send("update employees");
};

export const deleteEmployee = (req: Request, res: Response) => {
  res.send("delete employees");
};
