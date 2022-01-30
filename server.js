const mysql = require('mysql2')
const inquirer = require('inquirer')

require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
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
    .then( function ({answer}) {

        switch (answer) {
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

            case 'Update a manager':{
                updateManager();
                break;
            }

            case 'View employees by department': {
                employeeDept();
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

            case 'View department salary expenses': {
                viewExpenses();
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

function showDepartments() {
    console.log("You are now viewing ALL Departments");
  
    const query = `SELECT * FROM department`;
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      console.log("Departments Showing!\n");
      startApp();
    });
  }

showRoles = () => {
    console.log('Showing all roles: \n')
    const query = `SELECT * FROM company_role`

    connection.query(query, (err, rows) => {
        if (err) throw err
        console.table('All roles:', res)
        startApp()
    })
}

showEmployees = () => {
    console.log('Showing all employees: \n')
    const query = `SELECT * FROM employee`
    
    connection.query(query, (err, rows) => {
        if (err) throw err
        console.table('All employees:', res)
        startApp()
    })
}

addDept =() => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addDept',
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
             department_name: answer.department_name,
          },
        function (err, res) {
            if(err) throw err
            console.log(`${answer.department_name} added to departments`)
            console.table(res)

            startApp()
    })
    })
}

logDepartment = () => {
    console.log('Including department in list:')
    const query = 'SELECT * FROM department'

    connection.query(query, function(err, res) {
        if (err) throw err

        const deptList = res.map(({ id, department_name}) => ({
            value: id,
            department: `${department_name}`,
        }))

        addDept(deptList)
    })
}

addRole =() => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'first_name',
            message: "Enter employee's first name: ",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "Enter employee's last name: ",
        },
        {
            type: 'input',
            name: 'company_role_id',
            message: 'Enter role ID for new employee: ',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter manager ID (if applicable) for new employee: ',
        },
    ])
    .then(answer => {
        console.log(answer)

        const query = `INSERT INTO employee SET ?`

        connection.query(
            query,
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                company_role_id: answer.company_role_id,
                manager_id: answer.manager_id,
            },
            function (err, res) {
                if (err) throw err;

                console.table(res)
                console.log(`${answer.first_name} ${answer.last_name} has been added \n`)

                startApp()
            }
        )
    })
}

logRole = () => {
    console.log('Including role in list: ')
    const query = 'SELECT * FROM department'

    connection.query(query, function (err, res) {
        if (err) throw err

        const roleList = res.map(({ id, company_role_name}) => ({
            value: id,
            company_role: `${company_role_name}`
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
            name: 'company_role_id',
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
                company_role_id: answer.company_role_id,
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
            company_role_id: `${company_role_id}`,
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
        if (err) throw err

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
            name: 'company_role_id',
            message: 'Select the updated role: ',
            choices: roleList,
        },
    ])
    .then (function (answer) {
        const query = `UPDATE employee SET company_role_id = ? WHERE id = ?`

        connection.query (
            query,
            [answer.company_role_id, answer.employee_id],

            function (err, res) {
                if (err) throw err

                console.table(res)
                console.log(`The employee's role has been updated. \n`)

                startApp()
            }
        )
    })
}






