// ==========================================
// BORGU SECURITY - AGENCY AUTHENTICATION
// ==========================================

const agencyLoginForm =
    document.getElementById("agencyLoginForm");


if (agencyLoginForm) {

    agencyLoginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get form values
            const agency =
                document.getElementById("agency").value;

            const email =
                document.getElementById("agencyEmail")
                .value
                .trim()
                .toLowerCase();

            const password =
                document.getElementById("agencyPassword")
                .value;


            // ==========================================
            // DEMO AGENCY ACCOUNTS
            // ==========================================

            const agencies = {

                Police: {
                    email: "police@borgusecurity.gov.ng",
                    password: "Police123",
                    name: "Nigeria Police Force"
                },

                Army: {
                    email: "army@borgusecurity.gov.ng",
                    password: "Army123",
                    name: "Nigerian Army"
                },

                "Air Force": {
                    email: "airforce@borgusecurity.gov.ng",
                    password: "AirForce123",
                    name: "Nigerian Air Force"
                },

                "Fire Service": {
                    email: "fire@borgusecurity.gov.ng",
                    password: "Fire123",
                    name: "Federal Fire Service"
                },

                NSCDC: {
                    email: "nscdc@borgusecurity.gov.ng",
                    password: "NSCDC123",
                    name: "Nigeria Security and Civil Defence Corps"
                },

                FRSC: {
                    email: "frsc@borgusecurity.gov.ng",
                    password: "FRSC123",
                    name: "Federal Road Safety Corps"
                },

                "Emergency Management": {
                    email: "emergency@borgusecurity.gov.ng",
                    password: "Emergency123",
                    name: "Emergency Management Agency"
                }

            };


            // ==========================================
            // CHECK CREDENTIALS
            // ==========================================

            const selectedAgency =
                agencies[agency];


            if (
                selectedAgency &&
                selectedAgency.email === email &&
                selectedAgency.password === password
            ) {

                // Save logged-in agency
                localStorage.setItem(
                    "loggedInAgency",
                    JSON.stringify({
                        agency: agency,
                        name: selectedAgency.name,
                        email: selectedAgency.email
                    })
                );


                alert("AGENCY LOGIN SUCCESSFUL!");


                // Open agency dashboard
                window.location.href =
                    "agency-dashboard.html";


            } else {

                alert(
                    "Invalid agency credentials."
                );

            }

        }
    );

}