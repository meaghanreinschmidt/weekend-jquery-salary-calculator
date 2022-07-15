console.log('script sourced.');
$(readyNow); 

// readyNow function that is called after HTML has loaded.
function readyNow() {
    console.log('ready now');
    $('#submit-employee').on('click', submitEmployee);
}

const budget = 20000
let employees = [];

function submitEmployee() {
    // console.log('in submitEmployee');
    // get values for name and duration

    // decided to make an object instead 
    // let employeeFirstName = $('#first-name').val();
    // let employeeLastName = $('#last-name').val();
    // let employeeId = $('#id-number').val();
    // let employeeTitle = $('#employee-title').val();
    // let annualSalary = $('#annual-salary').val();
    
    let newEmployee = {
        employeeFirstName: $('#first-name').val(),
        employeeLastName: $('#last-name').val(),
        employeeId: $('#id-number').val(),
        employeeTitle: $('#employee-title').val(),
        annualSalary: $('#annual-salary').val()
    }

    // push the new employee into the array 
    employees.push(newEmployee);
    // append the values to the DOM
    $('#employee-table').append(`
        <tr>
            <td>${newEmployee.employeeFirstName}</td>
            <td>${newEmployee.employeeLastName}</td>
            <td>${newEmployee.employeeId}</td>
            <td>${newEmployee.employeeTitle}</td>
            <td>${newEmployee.annualSalary}</td>
    `)
    // clear inputs on the page
    $('input').val('');
    console.log(calculateMonthlyBudget(employees));
}

function calculateMonthlyBudget(anArray) {
    console.log('in calculateMonthlyBudget')
    let monthlyCost = 0;
    // loop through salaries array
    for(let i = 0; i < anArray.length; i++) {
        // for each employee, add up total of salaries
        monthlyCost += Number(anArray[i].annualSalary / 12);
    }
    return monthlyCost;
    // console.log adds annual salaries together
    // next steps: append total salaries
    // do math to make it monthly salary
}
