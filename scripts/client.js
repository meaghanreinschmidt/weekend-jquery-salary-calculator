console.log('script sourced.');
$(readyNow); 

// readyNow function that is called after HTML has loaded.
function readyNow() {
    console.log('ready now');
    $('#submit-employee').on('click', submitEmployee);
}

function submitEmployee() {
    console.log('in submitEmployee');
    // get avlues for name and duration
    let employeeFirstName = $('#first-name').val();
    let employeeLastName = $('#last-name').val();
    let employeeId = $('#id-number').val();
    let employeeTitle = $('#employee-title').val();
    let annualSalary = $('#annual-salary').val();
    
    console.log(employeeFirstName, employeeLastName, employeeId, employeeTitle, annualSalary);
    // append the values to the DOM
    $('#employee-table').append(`
        <tr>
            <td>${employeeFirstName}</td>
            <td>${employeeLastName}</td>
            <td>${employeeId}</td>
            <td>${employeeTitle}</td>
            <td>${annualSalary}</td>
    `)
}