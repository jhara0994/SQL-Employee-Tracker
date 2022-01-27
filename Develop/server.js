const mysql = require('mysql2')
const inquirer = require('inquirer')
const cTable = require('console.table')

require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employees_db',
})

const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'Choose one of the options below',
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
                      'No Action']
        }
    ])
    .then((answers) => {
        const choice  = answers

        if (choice === 'View all departments') {
            showDepartments()

        }

        if (choice === 'View all roles') {
            showRoles()
        }

        if (choice === 'View all employees') {
            showEmployees()
        }

        if (choice === 'Add a department') {
            addDept()
        }

        if (choice === 'Add a role') {
            addRole()
        }

        if (choice === 'Add an employee') {
            addEmployee()
        }

        if (choice === 'Update an employee role') {
            updateRole()
        }

        if (choice === 'Update a manager') {
            updateManager()
        }

        if (choice === 'View employees by department') {
            employeeDept()
        }

        if (choice === 'Delete a department') {
            delDept()
        }

        if (choice === 'Delete a role') {
            delRole()
        }

        if (choice === 'Delete an employee') {
            delEmployee()
        }

        if (choice === 'View department salary expenses') {
            viewExpenses()
        }

        if (choice === 'No Action') {
            connection.end()
        }
    })
}
