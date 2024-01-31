import { Request, Response } from "express";
import pool from "../start/db";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import CreateEmployeeDTO from "../dtos/employee.dto";

export const getEmployees = async (req: Request, res: Response) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

export const getEmployee = async (req: Request, res: Response) => {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM employee WHERE id = ?`,
    [req.params.id]
  );
  if (!rows[0]) res.status(404).send("Invalid id");

  res.json(rows[0]);
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
    salary,
  });
};

export const updateEmployee = (req: Request, res: Response) => {
  res.send("update employees");
};

export const deleteEmployee = (req: Request, res: Response) => {
  res.send("delete employees");
};
