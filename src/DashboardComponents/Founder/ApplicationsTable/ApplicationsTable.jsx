"use client";

export default function ApplicationsTable() {
  const applications = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Frontend Developer",
      date: "20 Jun 2026",
      status: "Pending",
    },
    {
      id: 2,
      name: "Sarah Lee",
      email: "sarah@gmail.com",
      role: "UI/UX Designer",
      date: "19 Jun 2026",
      status: "Accepted",
    },
    {
      id: 3,
      name: "Mike Ross",
      email: "mike@gmail.com",
      role: "Backend Developer",
      date: "18 Jun 2026",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Emma Watson",
      email: "emma@gmail.com",
      role: "Product Manager",
      date: "17 Jun 2026",
      status: "Pending",
    },
    {
      id: 5,
      name: "David Kim",
      email: "david@gmail.com",
      role: "DevOps Engineer",
      date: "16 Jun 2026",
      status: "Pending",
    },
  ];

  const getBadge = (status) => {
    if (status === "Accepted") return "badge-success";
    if (status === "Rejected") return "badge-error";
    return "badge-warning";
  };

  if (!applications || applications.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-75">
        <div className="card bg-base-100 shadow-xl p-8 text-center max-w-md">
          <h2 className="text-xl font-semibold">No Applications Yet</h2>
          <p className="text-gray-500 mt-2">
            You don`t have any applications right now. Once candidates apply,
            they will appear here.
          </p>

          <div className="mt-4">
            <button
              onClick={() => window.location.reload()}
              className="btn bg-purple-500"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Applicant</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app, index) => (
            <tr key={app.id}>
              <td>{index + 1}</td>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td>{app.role}</td>
              <td>{app.date}</td>

              <td>
                <span className={`badge ${getBadge(app.status)}`}>
                  {app.status}
                </span>
              </td>

              <td>
                {app.status === "Pending" ? (
                  <div className="flex gap-2">
                    <button className="btn btn-success btn-xs">Accept</button>
                    <button className="btn btn-error btn-xs">Reject</button>
                  </div>
                ) : (
                  <span className="text-gray-500 text-sm">No actions</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
