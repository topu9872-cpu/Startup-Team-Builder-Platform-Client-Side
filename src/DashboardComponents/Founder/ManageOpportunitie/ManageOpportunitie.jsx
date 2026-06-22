"use client";

import UpdateOpportunityModal from "../UpdateOpportunityModal/UpdateOpportunityModal";
import DeleteDialog from "../DeleteDiglog/DeleteDiglog";
import Link from "next/link";

export default function ManageOpportunitie({ ManageOpportunities }) {

  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl  shadow">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Role</th>
            <th>Startup</th>
            <th>Sector</th>
            <th>Work Type</th>
            <th>Deadline</th>
            <th className="flex justify-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {ManageOpportunities.map((op, index) => (
            <tr key={op._id}>
              <td>{index + 1}</td>
              <td>{op.roleTitle}</td>
              <td>{op.startupName}</td>
              <td>{op.sector}</td>
              <td>{op.workType}</td>
              <td>{op.applicationDeadline}</td>

              <td className="flex gap-2">
                <Link href={`/opportunities/${op._id}`} className="btn btn-info btn-sm">
                  View
                </Link>
                <UpdateOpportunityModal
                  initialData={op}
                />

                <DeleteDialog id={op} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
