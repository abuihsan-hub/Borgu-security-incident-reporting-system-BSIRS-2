// REGISTRATION

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));

        alert("REGISTRATION SUCCESSFUL!");
        window.location.href = "login.html";
    });
}


// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const savedUser = localStorage.getItem("registeredUser");

        if (!savedUser) {
            alert("No registered account found.");
            return;
        }

        const user = JSON.parse(savedUser);

        if (email === user.email && password === user.password) {

            localStorage.setItem("loggedIn", "true");

            alert("LOGIN SUCCESSFUL!");

            window.location.href = "dashboard.html";

        } else {

            alert("Incorrect email or password.");

        }
    });
}

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedIn");
        window.location.href = "login.html";
    });
}