import Joi from "joi";
import CreateEmployeeDTO from "../dtos/employee.dto";

function validateEmployee(employee: CreateEmployeeDTO) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).optional(),
    salary: Joi.number().min(1).max(500000).optional(),
  });

  return schema.validate(employee);
}

export default validateEmployee;
