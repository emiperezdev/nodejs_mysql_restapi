CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO employee (name, salary)
VALUES 
  ('Joe', '15000'),
  ('Mosh', '70000'),
  ('Max', '5000');
  
DESCRIBE employee;