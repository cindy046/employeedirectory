// view function click to revel employee list table- showing each info title

const clearContent = function() {
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

    const getInputVal = function() {
        const nameVal = $("#content").val();
        employeeList.push(nameVal);
    
        $("#content").val('');
        viewFunction();
      }

    // add function click to add to the employee list 
const addFunction = function () 
{
console.log("add button was clicked");
$("#content").append(`<div class="container">
<section id="searchButton">
<input id="name">
<input id="number">
<input id="number">
<button id="search">ADD</button>
</section> </div>;`) }

 $("#add").on("click", clearContent);
 $("#add").on("click", addFunction);

// add function click to add to the employee list 
const updateFunction = function () 
{
console.log("update button was clicked");
$("#content").append(`<div class="container">
<section id="searchButton">
<input id="name">
<input id="number">
<input id="number">
<button id="search">UPDATE</button>
</section> </div>;`) }

$("#update").on("click", clearContent);
$("#update").on("click", updateFunction);
// add function click to add to the employee list 
const deleteFunction = function () 
{
console.log("delete button was clicked");
$("#content").append(`<div class="container">
<section id="searchButton">
<input id="nameVal">
<input id="ofcNumberVal">
<input id="phoneNumberVal">
<button id="search">DELETE</button>
</section> </div>;`) }
    
$("#delete").on("click", clearContent);    
$("#delete").on("click", deleteFunction);
// add function click to add to the employee list 

const verifyFunction = function () {
console.log("verify button was clicked");

$("#content").append(`<div class="container">
<section id="verifyButton">
<input id="nameVal">
<input id="ofcNumberVal">
<input id="phoneNumberVal">
<button id="verify">VERIFY</button>
</section> </div>;`) }

const notVerified = function() {
    const nameVal = $('#name').val();
  
    if(employeeList.includes(nameVal)) {
      $("#content").append(`<div class="container">
      <section id="UnknownUser">
      <input id="nameVal">Unknown User
      <input id="ofcNumberVal">Void
      <input id="phoneNumberVal">Void
      <button id="tryAgain">TRY AGAIN</button>
      </section> </div>;`) }
      $('#name').val('');
  }
$("#verify").on("click", clearContent); 
$("#verify").on("click", verifyFunction);