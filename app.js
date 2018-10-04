// view function click to revel employee list table- showing each info title
const viewFunction = function () {
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
    
    $("#view").on("click", viewFunction)
    
    // add function click
    const addFunction = function () {
    console.log("button was clicked");
    
    }
    
    $("#add").on("click", addFunction)
    
    
    // update function click
    const updateFunction = function () {
    console.log("button was clicked");
    }
    
    $("#update").on("click", updateFunction)
    
    // delete function click
    const deleteFunction = function () {
    console.log("button was clicked");
    }
    
    $("#delete").on("click", deleteFunction)
    
    
    // verify function click /////
    const verifyFunction = function () {
    console.log("button was clicked");
    }
    
    $("#verify").on("click", verifyFunction)