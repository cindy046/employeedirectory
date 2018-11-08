


// view function click to revel employee list table- showing each info title
const clearContent = function () {
    $("#content").empty();
    }
    $("#view").on("click", clearContent);

    // VIEW FUNCTION ///
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
    
     // CHANGE PAGE FUNCTION ///
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
    <input id="phoneNum">
    </td>
    <td>
    <input id="officeNum">
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
    add();
    }
    else if(whichFunction === 'verify') {
    verifyEmployee();
    }
    else if(whichFunction === 'update') {
        updatedEmployee();
    }
    else if (whichFunction === 'delete') {
    deleteEmployee();
    }
    viewFunction();
    })
    })
    
     // DELETE FUNCTION ///
   
    function deleteEmployee () {
        const name = $('#name').val();
        for (let i = 0; i < employeeList.length; i++) {
          if (employeeList[i].name === name) {
            employeeList.splice(i, 1);
          }
        }
        viewFunction();
      }


 // ADD FUNCTION ///
const add = function (){ 
    const name = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();
    employeeList.push({
      name: name,
      officeNum: officeNum,
      phoneNum: phoneNum
    })
    viewFunction();
  }
 // VERIFY FUNCTION ///
const verifyEmployee = function (){ 
    const name = $('#name').val();
    for (let i = 0; i < employeeList.length; i++) {

        if (employeeList[i].name === name) 
            alert ("This employee exists");
            break;
            
    }
       if (employeeList[i].name != name) 
        alert ("This employee does not exist");break;
       clearContent();
    }

     // UPDATE FUNCTION ///
const updatedEmployee = function (){ 
    const name = $('#name').val();
    const officeNum = $('#officeNum').val();
  const phoneNum = $('#phoneNum').val();
    for (let i = 0; i < employeeList.length; i++) {

        if (employeeList[i].name === name) {
            employeeList[i].officeNum = officeNum;
            employeeList[i].phoneNum = phoneNum;
            break;
            
        }
    }
viewFunction(); 
}
