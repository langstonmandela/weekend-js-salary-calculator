console.log("---- Weekend Bonus Calcutor ----");



function submitForm(event){
    event.preventDefault();
    console.log('Submitted Form');
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const employeeID = document.getElementById("employeeID").value;
    const  jobTitle = document.getElementById("jobTitle").value;
    const annualSalary = document.getElementById("annualSalary").value;
    console.log(firstName, lastName, employeeID, jobTitle, annualSalary );
    
    const tableBody = document.querySelector("tbody");
    
    const newRow = document.createElement("tr");
    
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeID}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button class="delete-button" onClick="removeRow(event)">Delete</button></td>`; //remove row function will need to be built
        
        
        tableBody.appendChild(newRow);
        
        console.log(tableBody);
        
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("employeeID").value = '';
        document.getElementById("jobTitle").value = '';
        document.getElementById("annualSalary").value = '';
        
    }

    function removeRow(event){
        console.log(event.target);
        event.target.closest('tr').remove();
        
    }





    function onReady(){
        console.log('DOM is Ready');  
    }
    
    onReady();