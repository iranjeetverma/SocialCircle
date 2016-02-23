$(document).ready(function(){
  $("#log").click(login);
  $("#submit").click(registrationFrom);
  $("#reset").click(formReset);

});

/*
  Login Form Validation
  1. both can not be empty
  2. email must be of regex type
*/

var validteLoginForm = function(email, password){
  var error = {
    validate : true,
    message : ""
  }
  if( email =="" || password ==""){
    $('#mail, #pass').addClass("error-field");    
  }
  if(password==""){
    error.validate = false;
    error.message = "Enter Your Password." ; 
  }
  if(email==""){
    error.validate = false;
    error.message = "Enter Your Email Address." ; 
  }
   else if (!validateEmail(email)) {
    error.validate = false;
    error.message = "Email Address is not valid!" ;
  }
  return error;
}

var login = function(){
  var email = $("#mail").val();
  var password = $("#pass").val();
  var validateResult = validteLoginForm(email, password);
  if(validateResult.validate){
    performLogin(email, password);
  }else{
    displayError(validateResult.message);
  }
}

var displayError = function(message){
    $("#login_form .errormsgbox").text(message);
}

/*
  Login Request To Server
*/

  var performLogin= function(email, password){
    $.ajax({
      url: "http://localhost:3000/login",
      method: "POST",
      data: {"email" : email, "passoword": password},
      dataType: 'json',
      success: function(resp){
        if(resp.success == true){
         
        }
        if(resp.success == false){
          alert("server error");
        }
      },
      failure: function(resp){

      }
    });
  }

/*
Registration Form Vaildation

  
*/
var validateRegistrationForm = function(name,mail,phone,passwd,dob){
  var registrationError = {
    validation : true,
    errMessage : ""
  }
  if( name =="" || mail =="" || phone=="" || passwd=="" || dob==""){
    $('#name, #email,#phone,#pwd,#dob').addClass("error-field");       
  }
   if(dob==""){
    registrationError.validation = false;
    registrationError.errMessage = "What Is Your Date Of Birth?" ; 
  }
  if(passwd==""){
    registrationError.validation = false;
    registrationError.errMessage = "Create Your Password." ; 
  }
   if(phone==""){
    registrationError.validation = false;
    registrationError.errMessage = "Enter Your Phone Number." ; 
  }
    else if (!phonenumber(phone)) {
    registrationError.validation = false;
    registrationError.errMessage = "Phone Number Is Not valid!" ;
  }
  if(mail==""){
    registrationError.validation = false;
    registrationError.errMessage = "Enter Your Email Address." ; 
  }
  else if (!validateEmail(mail)) {
    registrationError.validation = false;
    registrationError.errMessage = "Email address is not valid!" ;
  }
  if(name==""){
    registrationError.validation = false;
    registrationError.errMessage = "What Is Your Name?" ; 
  }
  return registrationError;
}

var registrationFrom = function(){
  var name =  $("#name").val();
  var mail = $("#email").val();
  var phone = $("#phone").val();
  var passwd  = $("#pwd").val();
  var dob  = $("#dob").val();
  var validateRegistrationResult = validateRegistrationForm(name,mail,phone,passwd,dob);
  if(validateRegistrationResult.validation){
    userRegistration(name,mail,phone,passwd,dob);
  }else{
    displayRegistrationError(validateRegistrationResult.errMessage);
  }
}
var displayRegistrationError = function(errMessage){
    $("#registration_form .errormsgbox").text(errMessage);
}

/*
Registration Request To Server
*/

var userRegistration= function(name, mail, passwd, phone, dob){
  $.ajax({
    url: "http://localhost:3000/login",
    method: "POST",
    data: {"name" : name, "mail": mail , "passwd": passwd , "phone": phone , "dob": dob},
    dataType: 'json',
    success: function(resp){
      if(resp.success == true){
        window.location.href="account.html";
      }
      if(resp.success == false){
        alert("server error");
      }
    },
    failure: function(resp){

    }
  });
}

/*
  Reset Registration Form function
*/

var formReset = function(){
  var resetRegistrationForm = $('#myform')[0].reset();
    return resetRegistrationForm;
} 

/*
  Enter Only Numbers In Phone Textarea Function
*/

$(function() {
  var regExp = /[a-z]/i;
    $('#phone').on('keydown keyup', function(e) {
    var value = String.fromCharCode(e.which) || e.key;
      if (regExp.test(value)) {
        return false;
      }
    });
  }); 

/*
  Email Validation Functon Using RegEX 
*/

var validateEmail = function(mail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(mail)) {
      return true;
    }else{
      return false;
    }
}
var phonenumber = function(phone){  
  var phoneno = /^\d{10}$/;  
  if(phoneno.test(phone)){  
    return true;  
  }else{    
    return false;  
  }  
} 



    
    
