// ==========================================
// BORGU SECURITY - AGENCY DASHBOARD
// ==========================================


// ==========================================
// CHECK AGENCY LOGIN
// ==========================================

const savedAgency =
    localStorage.getItem("loggedInAgency");


if (!savedAgency) {

    window.location.href =
        "agency-login.html";

} else {


    // ==========================================
    // GET AGENCY INFORMATION
    // ==========================================

    const agency =
        JSON.parse(savedAgency);


    const agencyName =
        document.getElementById("agencyName");


    if (agencyName) {

        agencyName.textContent =
            agency.name;

    }


    // ==========================================
    // DISPLAY INCIDENT REPORTS
    // ==========================================

    function loadReports() {


        let reports = [];

        const savedReports =
            localStorage.getItem("incidentReports");


        if (savedReports) {

            try {

                reports =
                    JSON.parse(savedReports);

            } catch (error) {

                console.error(
                    "Error reading incident reports:",
                    error
                );

                reports = [];

            }

        }


        // ==========================================
        // STATISTICS
        // ==========================================

        const totalReports =
            reports.length;


        const pendingReports =
            reports.filter(function (report) {

                return report.status === "Pending";

            }).length;


        const reviewReports =
            reports.filter(function (report) {

                return report.status === "Under Review";

            }).length;


        const resolvedReports =
            reports.filter(function (report) {

                return report.status === "Resolved";

            }).length;


        // ==========================================
        // DISPLAY STATISTICS
        // ==========================================

        document.getElementById(
            "totalReports"
        ).textContent = totalReports;


        document.getElementById(
            "pendingReports"
        ).textContent = pendingReports;


        document.getElementById(
            "reviewReports"
        ).textContent = reviewReports;


        document.getElementById(
            "resolvedReports"
        ).textContent = resolvedReports;


        // ==========================================
        // DISPLAY INCIDENT REPORTS
        // ==========================================

        const reportsList =
            document.getElementById(
                "agencyReportsList"
            );


        if (reports.length === 0) {

            reportsList.innerHTML = `

                <div class="report-card">

                    <h3>
                        📭 No Incident Reports
                    </h3>

                    <p>
                        There are currently no
                        incident reports submitted
                        by community users.
                    </p>

                </div>

            `;

            return;

        }


        reportsList.innerHTML = "";


        reports.forEach(function (report) {


            const reportCard =
                document.createElement("div");


            reportCard.className =
                "report-card";


            reportCard.innerHTML = `

                <h3>
                    🚨 ${report.type}
                </h3>


                <p>
                    <strong>Reporter:</strong>
                    ${report.reporterName || "Not available"}
                </p>


                <p>
                    <strong>Email:</strong>
                    ${report.reporterEmail || "Not available"}
                </p>


                <p>
                    <strong>Location:</strong>
                    ${report.location}
                </p>


                <p>
                    <strong>Date:</strong>
                    ${report.date}
                </p>


                <p>
                    <strong>Time:</strong>
                    ${report.time}
                </p>


                <p>
                    <strong>Severity:</strong>
                    ${report.severity}
                </p>


                <p>
                    <strong>Description:</strong>
                    ${report.description}
                </p>


                <p>
                    <strong>Status:</strong>
                    ${report.status}
                </p>


                <!-- AGENCY ACTION -->

                <label class="action-label">

                    <strong>
                        Agency Action / Response:
                    </strong>

                </label>


                <textarea
                    class="agency-action"
                    data-id="${report.id}"
                    placeholder="Enter action taken or response..."
                >${report.agencyAction || ""}</textarea>


                <button
                    class="save-action-btn"
                    data-id="${report.id}"
                >
                    Save Agency Action
                </button>

            `;


            reportsList.appendChild(
                reportCard
            );

        });


        // ==========================================
        // SAVE AGENCY ACTION
        // ==========================================

        const saveActionButtons =
            document.querySelectorAll(
                ".save-action-btn"
            );


        saveActionButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const reportId =
                            Number(
                                this.dataset.id
                            );


                        const actionBox =
                            document.querySelector(
                                `.agency-action[data-id="${reportId}"]`
                            );


                        const newAction =
                            actionBox.value.trim();


                        // Get reports again

                        const reports =
                            JSON.parse(
                                localStorage.getItem(
                                    "incidentReports"
                                )
                            ) || [];


                        // Find report

                        const report =
                            reports.find(
                                function (item) {

                                    return item.id === reportId;

                                }
                            );


                        if (!report) {

                            alert(
                                "Report could not be found."
                            );

                            return;

                        }


                        // Save agency action

                        report.agencyAction =
                            newAction;


                        localStorage.setItem(
                            "incidentReports",
                            JSON.stringify(reports)
                        );


                        alert(
                            "Agency action saved successfully!"
                        );


                        // Reload dashboard

                        loadReports();

                    }
                );

            }
        );

    }


    // ==========================================
    // LOGOUT
    // ==========================================

    const logoutButton =
        document.getElementById(
            "agencyLogoutBtn"
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {


                localStorage.removeItem(
                    "loggedInAgency"
                );


                window.location.href =
                    "agency-login.html";

            }
        );

    }


    // ==========================================
    // INITIAL LOAD
    // ==========================================

    loadReports();

}