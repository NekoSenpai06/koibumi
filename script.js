var password = document.querySelector("input");
var indicator = document.getElementById("indicator");

function paswrd() {
     if(password.value === "koibumius0607") {
          indicator.innerHTML = "✔";
          location.href = "page.html";
     }

     else if(password.value === "us0607") {
         alert("You entered an old password");
     }

     else {
          indicator.innerHTML = "✘";
     }
}
