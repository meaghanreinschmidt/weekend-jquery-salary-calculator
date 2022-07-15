console.log('script sourced.');
$(readyNow); 

// readyNow function that is called after HTML has loaded.
function readyNow() {
    console.log('ready now');
    $('#submit-employee').on('click', submitEmployee);
}

function submitEmployee() {
    console.log('in submitEmployee');
}