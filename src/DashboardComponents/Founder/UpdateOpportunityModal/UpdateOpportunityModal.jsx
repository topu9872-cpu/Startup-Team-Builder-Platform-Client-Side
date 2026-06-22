"use client";

import React, { useState } from "react";
import { Button, Modal, Surface } from "@heroui/react";
import { Sliders, Briefcase, Calendar, FileText } from "lucide-react";
import { founderOpportunitiesUpdate } from "@/api/serverMutation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Localized Form Field Render Strategy Component
const ModalFieldInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  isSelect = false,
  options = [],
  rows = 3,
}) => {
  const inputClass =
    "w-full h-11 px-3.5 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm";
  const labelClass =
    "block mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400";

  return (
    <div>
      <label className={labelClass}>{label}</label>
      {isSelect ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#1a1d26]">
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputClass} h-auto p-4 resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputClass} ${type === "date" ? "scheme-dark" : ""}`}
        />
      )}
    </div>
  );
};

export default function UpdateOpportunityModal({ initialData }) {
  const rouser=useRouter()
  const [formData, setFormData] = useState({
    roleTitle: initialData?.roleTitle || "",
    startupName: initialData?.startupName || "",
    requiredSkills: initialData?.requiredSkills || "",
    applicationDeadline: initialData?.applicationDeadline || "",
    compensation: initialData?.compensation || "",
    workType: initialData?.workType || "",
    commitmentLevel: initialData?.commitmentLevel || "",
    workEnvironmentAllocation: initialData?.workEnvironmentAllocation || "",
    ecosystemSegment: initialData?.ecosystemSegment || "",
    sector: initialData?.sector || "",
    corePulseBackendSystems: initialData?.corePulseBackendSystems || "",
    description: initialData?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await founderOpportunitiesUpdate(initialData._id, formData);
    if (res) {
      rouser.refresh()
      toast.success(`${initialData.startupName} is updated`);
    } else {
      toast.error(`${initialData.startupName} is failed to update`);
    }
  };

  // Section Blueprint Mapping (All 11 text/select parameters systematically tracked)
  const technicalFields = [
    {
      name: "roleTitle",
      label: "Role Title",
      placeholder: "e.g., Lead Infrastructure Engineer",
    },
    {
      name: "startupName",
      label: "Startup Name",
      placeholder: "e.g., SkyForge Systems",
    },
    {
      name: "requiredSkills",
      label: "Required Skills Matrix",
      placeholder: "AWS, Terraform, Go, Kubernetes",
      spansFull: true,
    },
    { name: "sector", label: "Sector", placeholder: "e.g., Deep Tech / Cloud" },
    {
      name: "corePulseBackendSystems",
      label: "CorePulse Backend Engine",
      placeholder: "Distributed Pipelines, Kafka",
    },
    {
      name: "ecosystemSegment",
      label: "Ecosystem Segment",
      placeholder: "e.g., B2B Infrastructure SaaS",
    },
  ];

  const logisticFields = [
    {
      name: "workType",
      label: "Work Structure",
      placeholder: "Select Structure",
      isSelect: true,
      options: ["Remote", "Hybrid", "Onsite"],
    },
    {
      name: "workEnvironmentAllocation",
      label: "Environment Allocation Ratio",
      placeholder: "e.g., 80% Remote / 20% Onsite",
    },
    {
      name: "commitmentLevel",
      label: "Commitment Level",
      placeholder: "e.g., Full-Time Core Contributor",
    },
    {
      name: "compensation",
      label: "Compensation Structure",
      placeholder: "e.g., $160k - $210k + 1.5% Equity",
    },
    {
      name: "applicationDeadline",
      label: "Application Close Window",
      type: "date",
    },
  ];

  return (
    <Modal>
      {/* Trigger CTA */}
      <Button className="bg-amber-500 btn btn-sm hover:bg-amber-600 font-semibold text-neutral-950 text-sm px-4 py-2 rounded-lg transition shadow-md shadow-amber-500/10">
        Update
      </Button>

      <Modal.Backdrop className="bg-black/70 backdrop-blur-xs transition-all">
        <Modal.Container placement="center" className="p-4">
          <Modal.Dialog className="w-full sm:max-w-3xl bg-[#0d0e12] border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl relative text-sm text-slate-100">
            <Modal.CloseTrigger className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-900 transition" />

            {/* Header Layout */}
            <Modal.Header className="p-6 pb-4 border-b border-slate-800/60 bg-linear-to-b from-slate-900/20 to-transparent">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center rounded-lg">
                  <Sliders className="size-4.5" />
                </div>
                <div>
                  <Modal.Heading className="text-lg font-bold tracking-tight text-white">
                    Update Pipeline Opportunity
                  </Modal.Heading>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Modify functional parameters, resource allocation blocks,
                    and description blueprints.
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Dynamic Scroll Content Body */}
            <Modal.Body className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-5 custom-scrollbar">
              <Surface className="bg-transparent border-0 p-0 shadow-none">
                <form
                  id="update-opportunity-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Category Section 1: Tech Spec Mapping */}
                  <div className="bg-[#161820]/40 p-4 rounded-xl border border-slate-800/60 space-y-3.5">
                    <h4 className="text-[10px] font-bold text-purple-400 tracking-wider uppercase flex items-center gap-1.5">
                      <Briefcase className="size-3 text-purple-400" />{" "}
                      Engineering Specs & Architectural Core
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {technicalFields.map((field) => (
                        <div
                          key={field.name}
                          className={field.spansFull ? "sm:col-span-2" : ""}
                        >
                          <ModalFieldInput
                            {...field}
                            value={formData[field.name]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Section 2: Logistics Spec Mapping */}
                  <div className="bg-[#161820]/20 p-4 rounded-xl border border-slate-800/40 space-y-3.5">
                    <h4 className="text-[10px] font-bold text-indigo-400 tracking-wider uppercase flex items-center gap-1.5">
                      <Calendar className="size-3 text-indigo-400" /> Terms,
                      Allocation & Deployment Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {logisticFields.map((field) => (
                        <div
                          key={field.name}
                          className={
                            field.name === "applicationDeadline"
                              ? "sm:col-span-2"
                              : ""
                          }
                        >
                          <ModalFieldInput
                            {...field}
                            value={formData[field.name]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Section 3: Rich Narrative (12th Field) */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center gap-1.5 mb-2">
                      <FileText className="size-3 text-slate-500" /> Operational
                      Overview Narrative
                    </h4>
                    <ModalFieldInput
                      name="description"
                      label="Role Description"
                      type="textarea"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Outline core milestone targets, tooling configurations, and team scaling scopes..."
                    />
                  </div>
                </form>
              </Surface>
            </Modal.Body>

            {/* Action Footer Button Rails */}
            <Modal.Footer className="p-4 bg-[#111217] border-t border-slate-800/80 flex items-center justify-end gap-2">
              <Button
                slot="close"
                className="px-4 py-2 rounded-lg bg-transparent border border-slate-800 hover:bg-slate-900 transition text-slate-300 text-xs font-medium"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="update-opportunity-form"
                slot="close"
                className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-900/30 transition active:scale-98"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>{" "}
          {/* Fixed Tag Line Here */}
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
