console.log("---- Weekend Bonus Calcutor ----");


function onReady(){
    console.log('DOM is Ready');

    const form = document.getElementById("employeeForm");
    const firstNameInput = document.getElementById("firstName");
    
}

function submitForm(event){
    event.preventDefault();
    console.log('Submitted Form');
}

onReady();