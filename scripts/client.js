console.log('script sourced.');
$(readyNow); 

// readyNow function that is called after HTML has loaded.
function readyNow() {
    console.log('ready now');
    $('#submit-employee').on('click', submitEmployee);
    $('body').on('click', '.deleteBtn', onDelete);
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
            <td><button class="deleteBtn">X</button></td>
        <tr>
    `)
    // clear inputs on the page
    $('input').val('');
    calculateMonthlyBudget(employees);
}

function calculateMonthlyBudget(anArray) {
    // console.log('in calculateMonthlyBudget')
    let monthlyCost = 0;
    // loop through salaries array
    for(let i = 0; i < anArray.length; i++) {
        // for each employee, add up total of salaries
        monthlyCost += Math.round(Number(anArray[i].annualSalary / 12));
    }
    let el = $('#total-monthly');
    el.empty();
    el.append(monthlyCost);

    // error if total monthly exceeds limit 
    if(monthlyCost > 20000) {
        $('#total-monthly-body').css('background-color', 'red');
    };
};

function onDelete() {
    // console.log('in onDelete');     

    // $('td').remove(); // This gets rid of all of them
    // $('tr').remove(); // This removes table
    // $(this).remove(); // This gets rid of the button only
    // $(this).parent().remove(); // This gets rid of button and background color
    $(this).parent().parent().remove(); // This works!
};
