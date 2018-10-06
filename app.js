// view function click to revel employee list table- showing each info title
const clearContent = function () {
    $("#content").empty();
    }
    $("#view").on("click", clearContent);
    const viewFunction = function () {
    clearContent();
    console.log("view button was clicked");
    for (let i = 0; i < employeeList.length; i++) {
    $("#content").append(`<div class="container">
    <div class="table">
    <table class="table table-bordered">
    <thead> <tr>
    <th scope="col">Name: </th>
    <th scope="col">Office Number: </th>
    <th scope="col">Phone Number: </th>
    </tr> </thead>
    <tbody>
    <tr>
    <td>
    ${employeeList[i].name}
    </td>
    <td>
    ${employeeList[i].officeNum}
    </td>
    <td>
    ${employeeList[i].phoneNum}
    </td>
    </tr>
    </div>
    </div>`);
    }
    }
    $("#view").on("click", viewFunction);
    
    $('.changePage').on('click', function(event) {
    clearContent();
    let buttonClicked = event.target.id;
    
    $('#content').append(`<div class="container">
    <div class="table">
    <table class="table table-bordered">
    <thead> <tr>
    <th scope="col">Name: </th>
    <th scope="col">Office Number: </th>
    <th scope="col">Phone Number: </th>
    </tr> </thead>
    <tbody>
    <tr>
    <td>
    <input id="name">
    </td>
    <td>
    <input id="number">
    </td>
    <td>
    <input id="number">
    </td>
    <td>
    <button id=${buttonClicked}
    class="submitButton">${buttonClicked.toUpperCase()}</button>
    </td>
    </tr>
    </div>
    </section>
    </div>`)
    
    $('.submitButton').on('click', function(event) {
    console.log('button clicked');
    const whichFunction = event.target.id;
    if (whichFunction === 'add') {
    addEmployee();
    }
    else if(whichFunction === 'verify') {
    verifyEmployee();
    }
    else if(whichFunction === 'update') {
    }
    else if (whichFunction === 'delete') {
    deleteEmployee();
    }
    viewFunction();
    })
    })
    
    function deleteEmployee() {
    const employeeName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {
    
    if (employeeList[i].name === employeeName) {
    employeeList.splice(i, 1);
    }
    }
    }



const addEmployee = function (){ 
    const employeeName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {

        if (employeeList[i].name === employeeName) {
            employeeList.push(i, 1, employeeName, `<p>${employeeList[i].name}</p>`);
        }
    }
}

const verifyEmployee = function (){ 
    const employeeName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {

        if (employeeList === employeeName) 
            alert ("This employee exists");
      
        else 
        alert ("This employee does not exist");
    }
    clearContent();
    }

const updatedEmployee = function (){ 
    const employeeName = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {

        if (employeeList[i].name === employeeName) {
            employeeList.splice(i, 1);
        }
    }
}