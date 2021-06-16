var users_login_data = JSON.parse(localStorage.getItem("users_login_data")) || []
var current_email = JSON.parse(localStorage.getItem("current_email"))


function displayemail() {
    var displayemail = document.getElementById("welcome-back")
    // var p = document.createElement("p")
    // p.textContent = `Email: ${current_email}`
    displayemail.append(current_email)
}
displayemail()
function sign_in() {
    var password = document.getElementById("password").value
    users_login_data.forEach(function (el) {
        if (el.Email == current_email && el.password == password) {
            window.location.href = "index.html"
        } else {
            alert("please type correct email or password")
        }
    })

}