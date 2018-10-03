
const render = function() {
    $('.content').on();
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').on(`${employeeList[i]}`);
    }
 
document.getElementById("view").addEventListener("click", render);
}


// function myFunction() {
//     document.getElementById("view").console.log(employeeList);
    


