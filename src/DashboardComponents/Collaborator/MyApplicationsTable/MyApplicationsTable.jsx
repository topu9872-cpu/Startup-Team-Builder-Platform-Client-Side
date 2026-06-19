"use client";

export default function MyApplicationsTable() {
  const applications = [
    {
      id: 1,
      opportunityName: "Frontend Developer",
      startupName: "SkyForge",
      appliedDate: "20 Jun 2026",
      status: "Pending",
    },
    {
      id: 2,
      opportunityName: "Backend Engineer",
      startupName: "CorePulse",
      appliedDate: "18 Jun 2026",
      status: "Accepted",
    },
    {
      id: 3,
      opportunityName: "DevOps Engineer",
      startupName: "DevNest",
      appliedDate: "16 Jun 2026",
      status: "Rejected",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Accepted") return "badge-success";
    if (status === "Rejected") return "badge-error";
    return "badge-warning";
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow">

      <table className="table">

        {/* HEADER */}
        <thead>
          <tr>
            <th>#</th>
            <th>Opportunity Name</th>
            <th>Startup Name</th>
            <th>Applied Date</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {applications.map((app, index) => (
            <tr key={app.id}>
              <td>{index + 1}</td>

              <td className="font-medium">
                {app.opportunityName}
              </td>

              <td>{app.startupName}</td>

              <td>{app.appliedDate}</td>

              <td>
                <span className={`badge ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}