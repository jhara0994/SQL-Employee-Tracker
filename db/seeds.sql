INSERT INTO department (dept_name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Accounting'),
    ('Legal'),
    ('Network Security'),
    ('Company Management');


INSERT INTO role (title, salary, department_id)
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


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Bruce', 'Wayne', 6, NULL),
    ('Wanda', 'Maximoff', 6, 1), 
    ('Maria', 'Rambeau', 6, 1), 
    ('Tony', 'Stark', 6, 1), 
    ('Pepper', 'Potts', 3, 4), 
    ('Natasha', 'Romanoff', 2, 3), 
    ('Matt', 'Murdock', 1, 1), 
    ('Mary Jane', 'Watson', 4, 2), 
    ('Peter', 'Parker', 3, 5), 
    ('Daisy', 'Johnson', 5, 4), 
    ('Wade', 'Wilson', 1, 6), 
    ('Robert', 'Drake', 3, 8), 
    ('Loki', 'Laufeyson', 4, 7),
    ('Carol', 'Danvers', 2, 5)




