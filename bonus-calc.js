console.log("---- Weekend Bonus Calcutor ----");

let salary = 0;


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
        <td>$${parseFloat(annualSalary).toFixed(2)}</td>
        <td><button class="delete-button" onClick="removeRow(event)">Delete</button></td>
    `; //remove row function will need to be built
    
    
    
        
        
        tableBody.appendChild(newRow);
        updateTotalMonthly();
        
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
        document.getElementById("employeeID").value = '';
        document.getElementById("jobTitle").value = '';
        document.getElementById("annualSalary").value = '';
        
    }


    function updateTotalMonthly() {
        const salaryElements = document.querySelectorAll('td:nth-child(5)');
        let totalAnnualSalary = 0;
        salaryElements.forEach(function (salaryElement) {
            totalAnnualSalary += parseFloat(salaryElement.textContent.replace(/\$|,/g, '')) || 0;
        });
        const totalMonthly = totalAnnualSalary / 12;
        document.getElementById('totalMonthly').textContent = `$${totalMonthly.toFixed(2)}`;
    }

    function removeRow(event){
        console.log(event.target);
        event.target.closest('tr').remove();
        updateTotalMonthly();
        
    }





    function onReady(){
        console.log('DOM is Ready');  
    }
    
    onReady();