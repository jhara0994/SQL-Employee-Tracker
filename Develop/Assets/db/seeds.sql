USE employee_db;

INSERT INTO department 
    (name)
VALUES 
[
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Legal'),
    ('Network Security'),
    ('Company Management'),
]

INSERT INTO company_role
    (title, salary, department_id)
VALUES
[
    ('Sales Manager', 100000, 1),
    ('Salesperson', 50000, 1),
    ('Engineering Manager', 125000, 2),
    ('Software Engineer', 100000, 2),
    ('Accounting Manager', 95000, 3),
    ('Accountant', 60000, 3),
    ('Lead Lawyer', 200000, 4),
    ('Paralegal', 50000, 4),
    ('Certified Ethical Hacker', 200000, 5),
    ('Chief Executive Officer', 250000, 6),
    ('Chief Financial Officer', 175000, 6),
    ('Chief Operating Officer', 150000, 6),
    ('Chief Technology Officer', 225000, 6);
]

INSERT INTO employee
    (first_name. last_name, company_role_id, manager_id)
VALUES
[
    ('Bruce', 'Wayne', 6, 101) --CEO--
    ('Wanda', 'Maximoff', 6, 102) --CFO--
    ('Maria', 'Rambeau', 6, 103) --COO--
    ('Tony', 'Stark', 6, 104) --CTO--
    ('Pepper', 'Potts', 2, 105) --Engineering Manager--
    ('Natasha', 'Romanoff', 1, 106) --Sales Manager--
    ('Matt', 'Murdock', 4, 107) --Lead Lawyer--
    ('Mary Jane', 'Watson', 3, 108) --Accounting Manager--
    ('Peter', 'Parker', 2, NULL) --Software Enginner--
    ('Daisy', 'Johnson', 5, NULL) --Certified Ethical Hacker--
    ('Wade', 'Wilson', 1, NULL) --Salesperson--
    ('Robert', 'Drake', 3, NULL) --Accountant--
    ('Loki', 'Laufeyson', 4, NULL) --Paralegal--
    ('Yondu, Udonta', 1, NULL) --Salesperson--
    ('Carol', 'Danvers', 2, NULL) --Software Engineer--
]




