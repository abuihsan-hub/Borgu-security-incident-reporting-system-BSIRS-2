// My Reports

const reportsList = document.getElementById("reportsList");

const savedUser = localStorage.getItem("registeredUser");

if (!savedUser) {

    reportsList.innerHTML = `
        <p>User information not found. Please login again.</p>
    `;

} else {

    const user = JSON.parse(savedUser);

    const reports =
        JSON.parse(localStorage.getItem("incidentReports")) || [];

    // Show only reports submitted by the logged-in user
    const myReports = reports.filter(function (report) {
        return report.reporterEmail === user.email;
    });

    if (myReports.length === 0) {

        reportsList.innerHTML = `
            <p>You have not submitted any incident reports yet.</p>
        `;

    } else {

        myReports.forEach(function (report) {

            const reportCard = document.createElement("div");

            reportCard.className = "report-card";

            reportCard.innerHTML = `
                <h3>🚨 ${report.type}</h3>

                <p><strong>Reporter:</strong> ${report.reporterName}</p>

                <p><strong>Location:</strong> ${report.location}</p>

                <p><strong>Date:</strong> ${report.date}</p>

                <p><strong>Time:</strong> ${report.time}</p>

                <p><strong>Severity:</strong> ${report.severity}</p>

                <p><strong>Description:</strong> ${report.description}</p>

                <p><strong>Status:</strong> ${report.status}</p>
            `;

            reportsList.appendChild(reportCard);
        });
    }
}