// =====================================================
// BORGU SECURITY INCIDENT REPORTING SYSTEM
// FRONTEND AUTHENTICATION
// =====================================================


// =====================================================
// REGISTRATION
// =====================================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        // Check fields

        if (!name || !email || !password || !confirmPassword) {

            alert("Please fill in all fields.");

            return;
        }


        // Check password length

        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;
        }


        // Check passwords

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        // Create user

        const user = {

            name: name,

            email: email,

            password: password

        };


        // Save user

        localStorage.setItem(
            "registeredUser",
            JSON.stringify(user)
        );


        // Confirm registration

        alert(
            "Registration successful!\n\n" +
            "You can now login."
        );


        // Go to login

        window.location.href = "login.html";

    });

}


// =====================================================
// LOGIN
// =====================================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        // Get registered user

        const savedUser =
            localStorage.getItem("registeredUser");


        // No account

        if (!savedUser) {

            alert(
                "No account found.\n\n" +
                "Please register first."
            );

            return;
        }


        const user =
            JSON.parse(savedUser);


        // Check login details

        if (
            email === user.email &&
            password === user.password
        ) {

            localStorage.setItem(
                "loggedIn",
                "true"
            );


            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(user)
            );


            alert("Login successful!");


            window.location.href =
                "dashboard.html";

        } else {

            alert(
                "Incorrect email or password."
            );

        }

    });

}


// =====================================================
// DASHBOARD PROTECTION
// =====================================================

if (
    window.location.pathname.includes(
        "dashboard.html"
    )
) {

    const loggedIn =
        localStorage.getItem("loggedIn");


    if (loggedIn !== "true") {

        window.location.href =
            "login.html";

    }

}


// =====================================================
// LOGOUT
// =====================================================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "loggedIn"
            );

            localStorage.removeItem(
                "loggedInUser"
            );


            alert(
                "You have been logged out."
            );


            window.location.href =
                "login.html";

        }
    );

}