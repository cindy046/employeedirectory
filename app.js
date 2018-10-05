// view function click to revel employee list table- showing each info title

const clearContent = function () {
    $("#content").empty();
}
$("#view").on("click", clearContent);

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
$("#view").on("click", viewFunction);

// add button functions start here 
const addFunction = function () {
    console.log("add button was clicked");
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
        <input id="name">
        </td>
        <td>
        <input id="number">
        </td>
        <td>
        <input id="number">
        </td>
        <td>
        <button id="submit">ADD</button>
        </td>
        </tr>
        </div>
                </section> 
        </div>`);
    }
$("#add").on("click", clearContent);
$("#add").on("click", addFunction);


// update button functions start here 
const updateFunction = function () {
    console.log("update button was clicked");
    
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
<input id="name">
</td>
<td>
<input id="name">
</td>
<td>
<input id="name">
</td>
<td>
<button id="submit">UPDATE</button>
</td>
</tr>
</div>
        </section> 
</div>`);
}
$("#update").on("click", clearContent);
$("#update").on("click", updateFunction);


// add function click to add to the employee list

const deleteFunction = function () {
    console.log("delete button was clicked");

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
    <input id="name">
    </td>
    <td>
    <input id="name">
    </td>
    <td>
    <input id="name">
    </td>
    <td>
    <button id="submit">DELETE</button>
    </td>
    </tr>
    </div>
            </section> 
    </div>`)
}
$("#delete").on("click", clearContent)
$("#delete").on("click", deleteFunction);

// verify function click to add to the employee list 

const verifyFunction = function () {
    console.log("delete button was clicked");

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
        <input id="name">
        </td>
        <td>
        <input id="name">
        </td>
        <td>
        <input id="name">
        </td>
        <td>
        <button id="submit">VERIFY</button>
        </td>
        </tr>
        </div>
                </section> 
        </div>`)
    }
    $("#verify").on("click", clearContent)
    $("#verify").on("click", verifyFunction);





//     const addNewList += `$("#content").append(<div class="container">
//     <div class="table">
//     <table class="table table-bordered">
//     <thead> <tr>
//     <th scope="col">Name: </th>
//     <th scope="col">Office Number: </th>
//     <th scope="col">Phone Number: </th>
//     </tr> </thead>
//     <tbody>
//     <tr>
//     <td>
//     ${addemployeeList[i].name}
//     </td>
//     <td>
//     ${addemployeeList[i].officeNum}
//     </td>
//     <td>
//     ${addemployeeList[i].phoneNum}
//     </td>
//     </tr>
//     </div>
//     </div>`

// for (let i = 0; i < employeeList.length; i++){
// const addemployeeList = employeeList[i];




// const nameVal = $("#name").val(); {
//     employeeList.splice(employeeList.indexOf(nameVal), 1);
// }
// const removeName = $("#name").val(); {
//     console.log("remove name")
// }
// $("#name").val("submit", viewFunction)
// $("#delete").on("click", removeName)
// $("#delete").on("click", clearContent)
// $("#delete").on("click", deleteFunction)

// const nameVal = (` input.nameVal != employeeList.name`)

// const notVerified = function () {
//         if (employeeList.includes(nameVal); 
//     $("#content").append(`<div class="container">
//       <section id="UnknownUser">
//       <input id="nameVal">Unknown User
//       <input id="ofcNumberVal">Void
//       <input id="phoneNumberVal">Void
//       <button id="tryAgain">TRY AGAIN</button>
//       </section> </div>`);

// $("#name").val("");
// $("#verify").on("click", clearContent);
// $("#submit").on("click", viewFunction)