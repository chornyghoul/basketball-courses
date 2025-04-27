document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
        if (storedUserData.email === email && storedUserData.password === password) {
            window.location.href = "../pages/home/home.html"; 
        } else {
            alert("Invalid email or password.");
        }
    } else {
        alert("No account found. Please sign up.");
    }
});