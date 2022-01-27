INSERT INTO department 
    (name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Legal'),
    ('Network Security'),
    ('Company Management'),

INSERT INTO employee_role
    (title, salary, department_id)
VALUES
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

INSERT INTO employee
    (first_name. last_name, role_id, manager_id)
VALUES
    ('Bruce', 'Wayne', 1, 101) --CEO--
    ('Wanda', 'Maximoff', 2, 102) --CFO--
    ('Maria', 'Rambeau', 3, 103) --COO--
    ('Tony', 'Stark', 4, 104) --CTO--
    ('Pepper', 'Potts', 5, 105) --Engineering Manager--
    ('Natasha', 'Romanoff', 6, 106) --Sales Manager--
    ('Matt', 'Murdock', 7, 107) --Lead Lawyer--
    ('Mary Jane', 'Watson', 8, 108) --Accounting Manager--
    ('Peter', 'Parker', 9, NULL) --Software Enginner--
    ('Daisy', 'Johnson', 10, NULL) --Certified Ethical Hacker--
    ('Wade', 'Wilson', 11, NULL) --Salesperson--
    ('Robert', 'Drake', 12, NULL) --Accountant--
    ('Loki', 'Laufeyson', 13, NULL) --Paralegal--




