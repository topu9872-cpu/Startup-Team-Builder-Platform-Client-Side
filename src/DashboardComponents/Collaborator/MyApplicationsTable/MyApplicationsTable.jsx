"use client";

export default function MyApplicationsTable({ CollaboratorData }) {
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
          {CollaboratorData.map((app, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="font-medium">{app.roleTitle}</td>

              <td>{app.satartupName}</td>

              <td>{app.appliedDate}</td>

              <td>
                <span
                  className={`text-white ${app.status === "pending" ? "badge badge-warning" : app.status === "accept" ? "badge badge-success" : "badge badge-error"}`}
                >
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
