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
    ('Salesperson', 50000, 2),
    ('Engineering Manager', 125000, 3),
    ('Software Engineer', 100000, 4),
    ('Accounting Manager', 95000, 5),
    ('Accountant', 60000, 6),
    ('Lead Lawyer', 200000, 5),
    ('Paralegal', 50000, 4),
    ('Certified Ethical Hacker', 200000, 3),
    ('Chief Executive Officer', 250000, 6),
    ('Chief Financial Officer', 175000, 6),
    ('Chief Operating Officer', 150000, 6),
    ('Chief Technology Officer', 225000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Bruce', 'Wayne', 10, NULL),
    ('Wanda', 'Maximoff', 11, NULL), 
    ('Maria', 'Rambeau', 12, NULL), 
    ('Tony', 'Stark', 7, NULL), 
    ('Pepper', 'Potts', 3, 4), 
    ('Natasha', 'Romanoff', 1, NULL), 
    ('Matt', 'Murdock', 7, NULL), 
    ('Mary Jane', 'Watson', 5, NULL), 
    ('Peter', 'Parker', 4, NULL), 
    ('Daisy', 'Johnson', 9, NULL), 
    ('Wade', 'Wilson', 2, NULL), 
    ('Robert', 'Drake', 6, NULL), 
    ('Loki', 'Laufeyson', 8, NULL),
    ('Carol', 'Danvers', 4, NULL)




