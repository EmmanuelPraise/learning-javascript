console.log('Happy developing ✨')

// Given an array of employees with the details: name, phone, email, department, salary, employment date.
employees = [
    {
        'name': 'David',
        'phone': 9139268581,
        'email': 'davie612@outlook.com',
        'department': 'accounting',
        'salary': 150_000,
        'employment_date': new Date(2019, 12, 30).toDateString()
    },
    {
        'name': 'Thomas',
        'phone': 8181283984,
        'email': 'tom.fret@gmail.com',
        'department': 'engineering',
        'salary': 250_000,
        'employment_date': new Date(2018, 4, 4).toDateString()
    },
    {
        'name': 'John',
        'phone': 9037571843,
        'email': 'johnny612@yhaoo.com',
        'department': 'marketing',
        'salary': 80_000,
        'employment_date': new Date(2022, 7, 30).toDateString()
    },
    {
        'name': 'Peter',
        'phone': 7029348318,
        'email': 'mundanes_peter.gmail.com',
        'department': 'engineering',
        'salary': 200_000,
        'employment_date': new Date(2016, 12, 21).toDateString()
    },
    {
        'name': 'Katerine',
        'phone': 8019847680,
        'email': 'katerina_dior@yhaoo.com m',
        'department': 'marketing',
        'salary': 105_000,
        'employment_date': new Date(2021, 2, 2).toDateString()
    },
    {
        'name': 'Adam',
        'phone': 70234788458,
        'email': 'adam.eve@outlook.com',
        'department': 'accounting',
        'salary': 150_000,
        'employment_date': new Date(2020, 2, 3).toDateString()
    },
    {
        'name': 'Esther',
        'phone': 8151384675,
        'email': 'queen_ester223@yahoo.com',
        'department': 'marketing',
        'salary': 105_000,
        'employment_date': new Date(2020, 10, 11).toDateString()
    }
]


// 1. Write a function that accept employee and add to the list of employee.

function addEmployee (name, phone, email, department, salary, employment_date){
    employees.push({
        'name': name,
        'phone': phone,
        'email': email,
        'department': department,
        'salary': salary,
        'employment_date': employment_date
    })
}

addEmployee("John James", 9139268581, "emmanuelpraise36@gmail.com", "Public Relations", 1_000_000, new Date(2025, 1, 1).toDateString())

console.table(employees);


// 2. Write a function that accept 2 parameters 'date from' and 'date to'.

// 3. write function that returns the array of employee with invalid email address.

// 4. Write a function that return employee with highest and lowest pay.
