
var users_login_data = JSON.parse(localStorage.getItem("users_login_data")) || []
var current_email = JSON.parse(localStorage.getItem("current_email"))

function displayemail() {
    var displayemail = document.getElementById("displayemail")
    // var p = document.createElement("p")
    // p.textContent = `Email: ${current_email}`
    displayemail.append(current_email)
}
displayemail()

function login() {
    var password = document.getElementById("password").value
   
    if (a) {
        alert("fill all the input ")
    } else {
       
       
        // window.location.href = "Signup3.html"
    }
     localStorage.setItem("users_login_data", JSON.stringify(users_login_data))

}
