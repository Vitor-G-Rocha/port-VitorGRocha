//Calculate my age function
function calcAge(){
    var dob = new Date("12/24/1994");
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);
    //extract year from date      
    var year = age_dt.getUTCFullYear();
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);
    return age;
}
//////////////////////////////////////////////////////////
//display the calculated age/descriptions  Jquery
$("#age").text(calcAge() + " years old");
$("#born").text("12-24-1994");
$("#city").text("Aimorés");
$("#country").text("Brazil");
//////////////////////////////////////////////////////////