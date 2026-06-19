"use client";

import { useState } from "react";
import UpdateOpportunityModal from "../UpdateOpportunityModal/UpdateOpportunityModal";
import DeleteDialog from "../DeleteDiglog/DeleteDiglog";


export default function ManageOpportunities() {
  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      roleTitle: "Frontend Developer",
      startupName: "SkyForge",
      sector: "SaaS",
      workType: "Remote",
      deadline: "20 Jul 2026",
    },
    {
      id: 2,
      roleTitle: "Backend Engineer",
      startupName: "CorePulse",
      sector: "Cloud",
      workType: "Hybrid",
      deadline: "18 Jul 2026",
    },
    {
      id: 3,
      roleTitle: "DevOps Engineer",
      startupName: "DevNest",
      sector: "Infrastructure",
      workType: "Onsite",
      deadline: "15 Jul 2026",
    },
  ]);

  const handleDelete = (id) => {
    const updated = opportunities.filter((item) => item.id !== id);
    setOpportunities(updated);
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
      <table className="table">

        <thead>
          <tr>
            <th>#</th>
            <th>Role</th>
            <th>Startup</th>
            <th>Sector</th>
            <th>Work Type</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {opportunities.map((op, index) => (
            <tr key={op.id}>
              <td>{index + 1}</td>
              <td>{op.roleTitle}</td>
              <td>{op.startupName}</td>
              <td>{op.sector}</td>
              <td>{op.workType}</td>
              <td>{op.deadline}</td>

              <td className="flex gap-2">
                <button className="btn btn-info btn-xs">
                  View
                </button>
                <UpdateOpportunityModal/>

                {/* <button className="btn btn-warning btn-xs">
                  Update
                </button> */}

               <DeleteDialog/>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}