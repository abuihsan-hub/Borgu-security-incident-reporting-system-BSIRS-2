// ==========================================
// INCIDENT REPORT FORM
// ==========================================

const incidentForm = document.getElementById("incidentForm");

if (incidentForm) {

    incidentForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get logged-in community user
        const savedUser =
            localStorage.getItem("registeredUser");

        if (!savedUser) {

            alert("Please login before submitting an incident.");

            window.location.href = "login.html";

            return;
        }


        const user = JSON.parse(savedUser);


        // Create incident report
        const incident = {

            id: Date.now(),

            reporterName: user.name,

            reporterEmail: user.email,

            type:
                document.getElementById("incidentType").value,

            location:
                document.getElementById("location").value,

            date:
                document.getElementById("incidentDate").value,

            time:
                document.getElementById("incidentTime").value,

            severity:
                document.getElementById("severity").value,

            description:
                document.getElementById("description").value,

            status: "Pending"

        };


        // Get existing reports
        let reports =
            JSON.parse(
                localStorage.getItem("incidentReports")
            ) || [];


        // Add new report
        reports.push(incident);


        // Save reports
        localStorage.setItem(
            "incidentReports",
            JSON.stringify(reports)
        );


        alert(
            "Incident report submitted successfully!"
        );


        incidentForm.reset();


        window.location.href =
            "dashboard.html";

    });

}