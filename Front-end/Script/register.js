function runRegister() {
    var firstName = document.getElementById("ufirstname").value;
    var lastName = document.getElementById("ulastname").value;
    var email = document.getElementById("uemail").value;
    var password = document.getElementById("upassword").value;
    var confirmPassword = document.getElementById("ucpassword").value;
    var termsCheckbox = document.getElementById("uconfirmAcc");

    // Check if all input boxes are filled
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    // Check for SQL injection symbols in email and password
    var sqlInjectionRegex = /[\\"'<>()\[\]{};]/;
    if (sqlInjectionRegex.test(email) || sqlInjectionRegex.test(password)) {
        alert("Invalid characters detected. Please use only letters, numbers, and common symbols.");
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    // Check if the terms and conditions checkbox is checked
    if (!termsCheckbox.checked) {
        alert("Please agree to the terms and conditions");
        return;
    }

    // If all validations pass, you can proceed with the registration logic
    // For example, you can simulate a successful registration by redirecting to login.html
    alert("Registration successful!");
    window.location.href = "./login.html"; // Adjust the path as needed
}