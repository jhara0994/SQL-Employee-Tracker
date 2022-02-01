const mysql = require('mysql2')
const inquirer = require('inquirer')
require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rcr_2931',
    database: process.env.DB_NAME,
})

connection.connect(function (err) {
    if (err) throw err;
    startApp();
  });

const startApp = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'Choose one of the options below',
            loop: false,
            choices: ['View all departments',
                      'View all roles',
                      'View all employees',
                      'Add a department',
                      'Add a role',
                      'Add an employee',
                      'Update an employee role',
                      'Update a manager',
                      'View employees by department',
                      'Delete a department',
                      'Delete a role',
                      'Delete an employee',
                      'View department salary expenses',
                      'Restart this application',
                      'End this application',
                    ],
        },
    ])
    .then( function ({ choices }) {

        switch (choices) {
            case 'View all departments': {
                showDepartments();
                break;
            }

            case 'View all roles': {
                showRoles();
                break;
            }

            case 'View all employees': {
                showEmployees();
                break;
            }

            case 'Add a department': {
                addDept();
                break;
            }

            case 'Add a role':{
                addRole();
                break;
            }
            
            case 'Add an employee':{
                addEmployee();
                break;
            }

            case 'Update an employee role':{
                updateRole();
                break;
            }
            
            case 'Delete a department': {
                delDept();
                break;
            }

            case 'Delete a role': {
                delRole();
                break;
            }

            case 'Delete an employee': {
                delEmployee();
                break;
            }

            case 'Restart this application': {
                startApp();
                break;
            }

            case 'End this application': {
                console.log('Thank you for using this application.');
                connection.end();
                break;
            }
        }
    });
}

showDepartments = () => {
    const query = `SELECT * FROM department`;

    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    });
  }

showRoles = () => {
    console.log('Showing all roles:')
    const query = `SELECT * FROM role`;

    connection.query(query, (err, res) => {
        if (err) throw err
        console.table (res)
        startApp()
    });
}

showEmployees = () => {
    console.log('Showing all employees:')
    const query = `SELECT * FROM employee`;
    
    connection.query(query, (err, res) => {
        if (err) throw err
        console.table(res)
        startApp()
    });
}

addDept = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'dept_name',
            message: 'What is the name of the department you want to add?',
            validate: addDept => {
                if (addDept) {
                    return true;
                } else {
                    console.log('Please enter a department name')
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const query =`INSERT INTO department SET ?`;
    
    connection.query(
        query,
         {
             dept_name: answer.dept_name,
          },
        function (err, res) {
            if(err) throw err
            console.log(`${answer.dept_name} added to departments`)
            console.table(res)

            startApp()
    })
    })
}

logDepartment = () => {
    console.log('Including department in list:')
    const query = 'SELECT * FROM department';

    connection.query(query, function(err, res) {
        if (err) throw err;

        const deptList = res.map(({ id, dept_name }) => ({
            value: id,
            department: `${dept_name}`,
        }))

        addDept(deptList)
    })
}

addRole =() => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: "Enter the new role title: ",
        },
        {
            type: 'input',
            name: 'salary',
            message: "Enter the salary for this role: ",
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter role ID for new employee: ',
        },
    ])
    .then(answer => {
        console.log(answer)

        const query = `INSERT INTO role SET ?`

        connection.query(
            query,
            {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.department_id,
            },
            function (err, res) {
                if (err) throw err;

                console.table(res)
                console.log(`${answer.title} has been added \n`)

                startApp()
            }
        )
    })
}

logRole = () => {
    console.log('Including role in list: ')
    const query = 'SELECT * FROM department'

    connection.query(query, function (err, res) {
        if (err) throw err;

        const roleList = res.map(({ id, role_name}) => ({
            value: id,
            role: `${role_name}`
        }))

        addRole(roleList)
    })
}

addEmployee = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'first_name',
            message: "Enter the new employee's first name: ",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter the new employee's last name: ",
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role ID for the new employee: ',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager ID (if applicable) for the new employee: ',
        },
    ])
    .then (function (answer) {
        console.log(answer)
        const query = `INSERT INTO employee SET ?`

        connection.query(
            query,
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            },
            function (err, res) {
                if (err) throw err

                console.table(res)
                console.log(`${answer.first_name} ${answer.last_name} has been added \n`)

                startApp()
            }
        )
    })
}

logEmployee = () => {
    console.log('Including new employee in list:')
    const query = 'SELECT * FROM department'

    connection.query(query, function(err, res) {
        if (err) throw err

        const employeeList = res.map(({ id, first_name, last_name, company_role_id, manager_id}) => ({
            value: id,
            first_name: `${first_name}`,
            last_name: `${last_name}`,
            role_id: `${role_id}`,
            manager_id: `${manager_id}`,
        }))

        addEmployee(employeeList)
    })
}

updateRole = () => {
    selectEmployee()
}

selectEmployee = () => {
    console.log('Updating employee: ')
    const query = `SELECT * FROM employee`

    connection.query(query, function (err, res) {
        if (err) throw err;

        const employeeList = res.map(({ id, first_name, last_name}) => ({
            value: id,
            name: `${first_name} ${last_name}`
        }))

        selectRole(employeeList)
    })
}

selectRole = (employeeList) => {
    console.log('Updating employee role: ')
    const query = `SELECT * FROM role`
    let roleList

    connection.query(query, function (err, res) {
        if (err) throw err

        const roleList = res.map(({ id, title, salary}) => ({
            value: id,
            title: `${title}`,
            salary: `${salary}`
        }))

        console.table(res)
        console.log(`Select a role for promotion: \n`)


        updateEmployee(employeeList, roleList)
    })
}

function updateEmployee (employeeList, roleList) {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select the employee to update role: ',
            choices: employeeList,
        },
        {
            type: 'list', 
            name: 'role_id',
            message: 'Select the updated role: ',
            choices: roleList,
        },
    ])
    .then (function (answer) {
        const query = `UPDATE employee SET company_role_id = ? WHERE id = ?`

        connection.query (
            query,
            [answer.role_id, answer.employee_id],

            function (err, res) {
                if (err) throw err

                console.table(res)
                console.log(`The employee's role has been updated. \n`)

                startApp()
            }
        )
    })
}






