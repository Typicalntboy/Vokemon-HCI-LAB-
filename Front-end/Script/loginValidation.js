function runLoginValidation() {
    var email = document.getElementById('uemail').value.trim();
    var password = document.getElementById('upassword').value.trim();

    // Validasi bahwa email dan password harus terisi
    if (email === '' || password === '') {
        alert('Email address and password are required.');
        return;
    }

    // Validasi agar email dan password tidak dapat diinput parameter SQL Injection
    if (containsSqlInjection(email) || containsSqlInjection(password)) {
        alert('Invalid characters in email address or password.');
        return;
    }

    // Validasi apakah email dan password sudah sesuai dengan akun (contoh dengan akun admin)
    if (email === 'admin@admin.com' && password === 'Admin123') {
        alert('Login successful!');
        // Redirect to index.html
        window.location.href = './index.html';
    } else {
        alert('Invalid email address or password.');
    }
}

function containsSqlInjection(str) {
    var sqlInjectionSymbols = ["'", "--", ";", "/*", "*/"];
    for (var i = 0; i < sqlInjectionSymbols.length; i++) {
        if (str.includes(sqlInjectionSymbols[i])) {
            return true;
        }
    }
    return false;
}
