console.log("---- Weekend Bonus Calcutor ----");


function onReady(){
    console.log('DOM is Ready');

    const form = document.getElementById("employeeForm");
    const firstNameInput = document.getElementById("firstName");
    
}

document.addEventListener("DOMContentLoaded", (event) => {
    

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("#employeeForm input");

    inputs.forEach((input) => {
        console.log(`${input.id}: ${input.value}`);
    });
});

onReady();