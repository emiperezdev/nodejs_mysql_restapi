import { Request, Response } from "express";
import pool from "../start/db";
import CreateEmployeeDTO from "../schemas/employee.schema";
import { ResultSetHeader } from "mysql2";

export const getEmployees = async (req: Request, res: Response) => {
  const [result] = await pool.query('SELECT "pong"');
  res.json(result);
};

export const getEmployee = (req: Request, res: Response) => {
  res.send("get one employee");
};

export const createEmployee = async (req: Request, res: Response) => {
  const { name, salary } = req.body as CreateEmployeeDTO;
  const [rows] = await pool.query<ResultSetHeader>(
    "INSERT INTO employee (name, salary) VALUES (?, ?)",
    [name, salary]
  );

  res.send({
    id: rows.insertId,
    name, 
    salary
  });
};

export const updateEmployee = (req: Request, res: Response) => {
  res.send("update employees");
};

export const deleteEmployee = (req: Request, res: Response) => {
  res.send("delete employees");
};
