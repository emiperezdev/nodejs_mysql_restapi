import { Router } from 'express';
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from '../controllers/employees.controller';
import validate from '../middleware/validate';
import validateEmployee from '../schemas/employee.schema';

const employeesRouter = Router();

employeesRouter.get('/employees', getEmployees);

employeesRouter.get('/employees/:id', getEmployee);

employeesRouter.post('/employees', validate(validateEmployee), createEmployee);

employeesRouter.put('/employees/:id', updateEmployee);

employeesRouter.delete('/employees/:id', deleteEmployee);

export default employeesRouter;