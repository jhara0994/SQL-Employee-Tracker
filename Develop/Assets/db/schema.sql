DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE company_role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL (10.3) NULL,
    department_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (department_id) REFERENCES department_id,
)

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    company_role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (company_role_id) REFERENCES company_role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id),
);