// ===============================
// BSIRS AUTHENTICATION
// Supabase Authentication
// ===============================


// ===============================
// REGISTRATION
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Basic validation
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        try {

            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name
                    }
                }
            });

            if (error) {
                alert(error.message);
                return;
            }

            alert("REGISTRATION SUCCESSFUL!");

            window.location.href = "login.html";

        } catch (error) {

            console.error(error);
            alert("Registration failed. Please try again.");

        }
    });
}


// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please enter your email and password.");
            return;
        }

        try {

            const { data, error } =
                await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });

            if (error) {
                alert(error.message);
                return;
            }

            localStorage.setItem("loggedIn", "true");

            alert("LOGIN SUCCESSFUL!");

            window.location.href = "dashboard.html";

        } catch (error) {

            console.error(error);
            alert("Login failed. Please try again.");

        }
    });
}


// ===============================
// LOGOUT
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async function() {

        await supabaseClient.auth.signOut();

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    });
}