var password = document.querySelector("input");
var indicator = document.getElementById("indicator");

function paswrd() {
     if(password.value === "us0607") {
          indicator.innerHTML = "✔";
          location.href = "page.html";
     }
          
     else {
          indicator.innerHTML = "✘";
     }
}
