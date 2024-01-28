





document.addEventListener("DOMContentLoaded",function AnzeigenButton(){



const passwordInput = document.getElementById("password");
const zeigPasswordButton = document.getElementById("zeigPasswordButton");

zeigPasswordButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    zeigPasswordButton.textContent = "Ausblenden";
  } else {
    passwordInput.type = "password";
    zeigPasswordButton.textContent = "Anzeigen";
  }
});

});


document.addEventListener("DOMContentLoaded",function(){

  const LoginBox = document.getElementsByClassName('Login-con')[0];
  const RegBox = document.getElementsByClassName("reg-con")[0];
  const RegButton = document.getElementById('reg-button');
  const LoginButton = document.getElementById('Login-button');



  RegButton.addEventListener("click",function(){

 

  
  LoginBox.style.gridColumnStart  = "2";
  LoginBox.style.gridColumnEnd  = "2";
  LoginBox.style.gridRowStart = "1";
  LoginBox.style.gridRowEnd = "1"; 

  
  RegBox.style.gridColumnStart = "1";
  RegBox.style.gridColumnEnd  = "1";
  RegBox.style.gridRowStart = "1";
  RegBox.style.gridRowEnd = "1"; 


})


LoginButton.addEventListener("click",function(){


  LoginBox.style.gridColumnStart  = "1";
  LoginBox.style.gridColumnEnd  = "1";
  LoginBox.style.gridRowStart = "1";
  LoginBox.style.gridRowEnd = "1"; 

  
  RegBox.style.gridColumnStart = "2";
  RegBox.style.gridColumnEnd  = "2";
  RegBox.style.gridRowStart = "1";
  RegBox.style.gridRowEnd = "1"; 

})






});







