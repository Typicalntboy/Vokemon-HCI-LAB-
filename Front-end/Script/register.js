function runRegister() {
    var firstName = document.getElementById("ufirstname").value;
    var lastName = document.getElementById("ulastname").value;
    var email = document.getElementById("uemail").value;
    var password = document.getElementById("upassword").value;
    var confirmPassword = document.getElementById("ucpassword").value;
    var termsCheckbox = document.getElementById("uconfirmAcc");
    var genderDropdown = document.getElementById("ugender");

    // Melakukan Vlidasi apakah semua input sudah terisi
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
    }

    // Membuat validasi apakah gender sudah dipilih
    if (genderDropdown.value === "") {
        alert("Please select your gender");
        return;
    }

    // Membuat Validasi Parameter SQL injection di email dan password
    var sqlInjectionRegex = /[\\"'<>()\[\]{};]/;
    if (sqlInjectionRegex.test(email) || sqlInjectionRegex.test(password)) {
        alert("Invalid characters detected. Please use only letters, numbers, and common symbols.");
        return;
    }

    // Membuat Validasi apakah Password dan Confirm Password bernilai sama
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }

    // Membuat validasi apakah Checkbox Terms and Agreement sudah diisi
    if (!termsCheckbox.checked) {
        alert("Please agree to the terms and conditions");
        return;
    }

    // Jika semua validasi sudah valid, maka akan redirect ke login page
    alert("Registration successful!");
    window.location.href = "./login.html";
}