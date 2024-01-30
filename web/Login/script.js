





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


document.addEventListener("DOMContentLoaded",function BoxBewegung(){

  const LoginBox = document.getElementsByClassName('Login-con')[0];
  const RegBox = document.getElementsByClassName("reg-con")[0];
  const RegButton = document.getElementById('reg-button');
  const LoginButton = document.getElementById('Login-button');



  RegButton.addEventListener("click",function(){

    
    LoginBox.style.left = "-100%";
    RegBox.style.left = "0%";

});


LoginButton.addEventListener("click",function(){


  RegBox.style.left = "100%";
  LoginBox.style.left = '0%';

});






});







