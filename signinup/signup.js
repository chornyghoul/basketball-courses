document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const gender = document.getElementById("select").value;

    const userData = { email, password, name, gender };
    localStorage.setItem("userData", JSON.stringify(userData));

    window.location.href = "login.html";
}); 