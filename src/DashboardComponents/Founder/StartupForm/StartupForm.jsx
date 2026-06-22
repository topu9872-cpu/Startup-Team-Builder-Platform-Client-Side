"use client";
import { founderStartups } from "@/api/serverMutation";
import { uploadImage } from "@/lib/imageBB";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import StartupUpdateModal from "./StartupUpdateForm";
import { StartupDeleteModal } from "./StartupDeleteModal";


const labelClass = "block text-xs font-semibold mb-1 opacity-80";
const inputClass =
  "w-full px-4 py-2 bg-black border border-current/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm";

// Reusable Sub-component for Inputs
const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  className = "",
}) => (
  <div className={className}>
    <label className={labelClass}>
      {label} {required && "*"}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

export default function StartupForm({ user,companies }) {
  const [viewMode, setViewMode] = useState("table"); // 'table', 'create'

  const [logoUrl, setLogoUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const resetForm = () => {
    setLogoUrl("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setViewMode("table");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const image = await uploadImage(logoUrl);
    const rawData = Object.fromEntries(new FormData(e.target));

    const newCompany = {
      ...rawData,
      id: Date.now().toString(),
      logo: image,
      status: "pending",
      createdAt: new Date().toLocaleDateString("en-GB"),
      user: user?.id,
    };

    


    try {

      const res = await founderStartups(newCompany);

      if (res) {
        toast.success("Startup Created Successfully!");
      } else {
        toast.error("Startup Creation Failed!");
      }
    } catch (err) {
      toast.error("Server Error!");
    }

    resetForm();
  };
console.log(companies)
  return (
    <div className="max-w-6xl mx-auto my-4 md:my-8 p-4 md:p-6 rounded-xl border border-current/20 text-current text-sm">
      {/* Dynamic Header */}
      <div className="flex justify-between items-center mb-6 border-b border-current/10 pb-4">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">
          {viewMode === "table" ? "Startup Directory" : "Register Startup"}
        </h2>
        <button
          onClick={() =>
            viewMode === "table" ? setViewMode("create") : resetForm()
          }
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition"
        >
          {viewMode === "table" ? "+ New Startup" : "← Back"}
        </button>
      </div>

      {/* Directory Table Grid */}
      {viewMode === "table" ? (
        <div className="overflow-x-auto rounded-lg border border-current/10">
          <table className="w-full text-left border-collapse min-w-150">
            <thead>
              <tr className="border-b border-current/10 bg-current/5 font-semibold">
                <th className="p-3">Startup</th>
                <th className="p-3">Founder</th>
                <th className="p-3">Industry</th>
                <th className="p-3">Team</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-current/10">
              {!companies ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center opacity-50">
                    No profiles found.
                  </td>
                </tr>
              ) : (
                companies.map((c) => (
                  <tr key={c.id} className="hover:bg-current/5 transition">
                    <td className="p-3 font-medium flex items-center gap-3">
                      {c.logo ? (
                        <img
                          src={c.logo}
                          alt="logo"
                          className="w-7 h-7 rounded object-cover"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded bg-current/10 flex items-center justify-center text-[10px] opacity-40">
                          N/A
                        </div>
                      )}
                      {c.startupName}
                    </td>
                    <td className="p-3 opacity-80">{c.founderName || "—"}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 bg-current/5 rounded text-xs">
                        {c.industry || "General"}
                      </span>
                    </td>
                    <td className="p-3 font-medium">
                      {c.teamSizeNeeded ? `${c.teamSizeNeeded} members` : "—"}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${
                          c.status === "approved"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-1 whitespace-nowrap">
               
                      <StartupUpdateModal company={c}/>
                      <StartupDeleteModal company={c}/>
                     
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        /* Combined Form View */
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Startup Name"
              name="startupName"
              required
              placeholder="e.g., SpaceX"
              className="md:col-span-2"
            />
            <InputField
              label="Founder Name"
              name="founderName"
              required
              placeholder="Elon Musk"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="Industry"
              name="industry"
              required
              placeholder="e.g., Aerospace, AI"
              className="md:col-span-2"
            />
            <InputField
              label="Team Size Needed"
              name="teamSizeNeeded"
              type="number"
              required
              placeholder="5"
            />
          </div>

          <div>
            <label className={labelClass}>Logo Upload</label>
            <div className="flex items-center gap-4 flex-wrap">
              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => setLogoUrl(e.target.files[0])}
                className="block text-xs border p-1.5 border-gray-700 rounded-lg opacity-80 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-600/10 file:text-purple-500 cursor-pointer"
              />
              {isUploading && (
                <span className="text-xs text-purple-500 animate-pulse">
                  Uploading...
                </span>
              )}
              {logoUrl && !isUploading && (
                <span className="text-xs text-green-500 font-medium">
                  ✓ Attached
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Funding Stage</label>
              <select
                name="fundingStage"
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" className="bg-black text-white">
                  Select Stage
                </option>
                <option value="Seed" className="bg-black text-white">
                  Seed
                </option>
                <option value="Design Tech" className="bg-black text-white">
                  Design Tech
                </option>
                <option
                  value="Artificial Intelligence"
                  className="bg-black text-white"
                >
                  Artificial Intelligence
                </option>
                <option value="Developer Tools" className="bg-black text-white">
                  Developer Tools
                </option>
              </select>
            </div>
            <InputField
              label="Founder Email"
              name="founderEmail"
              type="email"
              required
              placeholder="founder@company.com"
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Overview..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-4 border-t border-current/10">
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border border-current/20 rounded-lg text-xs font-medium hover:bg-current/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg disabled:opacity-50 shadow-md"
            >
              Create Profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
