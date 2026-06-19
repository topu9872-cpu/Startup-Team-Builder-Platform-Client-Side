"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";

export default function StartupForm() {
  const [viewMode, setViewMode] = useState("table"); // 'table', 'create', 'edit'
  const [companies, setCompanies] = useState([]);
  const [hiddenCompanies, setHiddenCompanies] = useState(new Set());
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const CREATION_LIMIT = 1;
  const isLimitReached = companies.length >= CREATION_LIMIT;

  const [formData, setFormData] = useState({
    name: "", founderName: "", industry: "", logo: "",
    fundingStage: "", founderEmail: "", teamSizeNeeded: "", description: ""
  });
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("image", file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`, { method: "POST", body: uploadData });
      const result = await res.json();
      if (result.success) setFormData(p => ({ ...p, logo: result.data.url }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", founderName: "", industry: "", logo: "", fundingStage: "", founderEmail: "", teamSizeNeeded: "", description: "" });
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setViewMode("table");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (viewMode === "edit") {
      setCompanies(p => p.map(item => item.id === editingId ? { ...item, ...formData } : item));
    } else {
      if (isLimitReached) return;
      setCompanies(p => [{ ...formData, id: Date.now().toString(), status: "pending" }, ...p]);
    }
    resetForm();
  };

  const inputClass = "w-full px-4 py-2 bg-black border border-current/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-sm";
  const labelClass = "block text-xs font-semibold mb-1 opacity-80";

  return (
    <div className="max-w-6xl mx-auto my-4 md:my-8 p-4 md:p-6 rounded-xl border border-current/20 text-current text-sm">
      
      {/* Banner Limit Alert */}
      {viewMode === "table" && companies.length > 0 && (
        <div className={`mb-6 p-4 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isLimitReached ? "border-purple-500/40 bg-purple-950/10 text-purple-200" : "border-current/10 bg-current/5"}`}>
          <div>
            <h4 className="font-semibold">{companies.length} of {CREATION_LIMIT} slots used {isLimitReached ? "👑" : "🚀"}</h4>
            <p className="text-xs opacity-70 mt-0.5">{isLimitReached ? "Maximum free listing limit reached. Upgrade for unlimited registrations." : "You can add more startup profiles on your current plan."}</p>
          </div>
          {isLimitReached && (
            <Link href="/plan" className="w-full sm:w-auto px-4 py-2 text-center bg-linear-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold rounded-lg shadow-md transition active:scale-95">Upgrade Plan</Link>
          )}
        </div>
      )}

      {/* Dynamic Header */}
      <div className="flex justify-between items-center mb-6 border-b border-current/10 pb-4">
        <h2 className="text-lg md:text-xl font-bold tracking-tight">{viewMode === "table" ? "Startup Directory" : viewMode === "create" ? "Register Startup" : "Update Startup"}</h2>
        <button onClick={() => viewMode === "table" ? (!isLimitReached && setViewMode("create")) : resetForm()} disabled={viewMode === "table" && isLimitReached} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-current/5 disabled:text-current/30 text-white text-xs font-medium rounded-lg transition disabled:cursor-not-allowed">
          {viewMode === "table" ? "+ New Startup" : "← Back"}
        </button>
      </div>

      {/* Directory Table Grid */}
      {viewMode === "table" && (
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
              {companies.length === 0 ? (
                <tr><td colSpan="6" className="p-8 text-center opacity-50">No profiles found.</td></tr>
              ) : (
                companies.map((c) => {
                  const isHidden = hiddenCompanies.has(c.id);
                  return (
                    <tr key={c.id} className={`hover:bg-current/5 transition ${isHidden ? "opacity-30" : ""}`}>
                      <td className="p-3 font-medium flex items-center gap-3">
                        {c.logo ? <img src={c.logo} alt="logo" className="w-7 h-7 rounded object-cover" /> : <div className="w-7 h-7 rounded bg-current/10 flex items-center justify-center text-[10px] opacity-40">N/A</div>}
                        {c.name}
                      </td>
                      <td className="p-3 opacity-80">{c.founderName || "—"}</td>
                      <td className="p-3"><span className="px-2 py-0.5 bg-current/5 rounded text-xs">{c.industry || "General"}</span></td>
                      <td className="p-3 font-medium">{c.teamSizeNeeded ? `${c.teamSizeNeeded} members` : "—"}</td>
                      <td className="p-3"><span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${c.status === "approved" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"}`}>{c.status}</span></td>
                      <td className="p-3 text-right space-x-1 whitespace-nowrap">
                        <button onClick={() => setHiddenCompanies(p => { const n = new Set(p); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n; })} className="p-1 hover:bg-current/10 rounded">{isHidden ? "👁️" : "🙈"}</button>
                        <button onClick={() => { setEditingId(c.id); setFormData({ ...c }); setViewMode("edit"); }} className="px-2 py-1 text-xs font-medium text-purple-500 border border-purple-500/20 rounded hover:bg-purple-500/10">✏️</button>
                        <button onClick={() => window.confirm("Delete profile?") && setCompanies(p => p.filter(i => i.id !== c.id))} className="px-2 py-1 text-xs font-medium text-red-500 border border-red-500/20 rounded hover:bg-red-500/10">🗑️</button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Combined Form View */}
      {viewMode !== "table" && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2"><label className={labelClass}>Startup Name *</label><input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g., SpaceX" className={inputClass} /></div>
            <div><label className={labelClass}>Founder Name *</label><input type="text" name="founderName" required value={formData.founderName} onChange={handleChange} placeholder="Elon Musk" className={inputClass} /></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2"><label className={labelClass}>Industry *</label><input type="text" name="industry" required value={formData.industry} onChange={handleChange} placeholder="e.g., Aerospace, AI" className={inputClass} /></div>
            <div><label className={labelClass}>Team Size Needed *</label><input type="number" name="teamSizeNeeded" required min="1" value={formData.teamSizeNeeded} onChange={handleChange} placeholder="5" className={inputClass} /></div>
          </div>

          <div>
            <label className={labelClass}>Logo Upload</label>
            <div className="flex items-center gap-4 flex-wrap">
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleLogoUpload} className="block text-xs opacity-80 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-purple-600/10 file:text-purple-500 cursor-pointer" />
              {isUploading && <span className="text-xs text-purple-500 animate-pulse">Uploading...</span>}
              {formData.logo && !isUploading && <span className="text-xs text-green-500 font-medium">✓ Attached</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Funding Stage</label>
              <select name="fundingStage" value={formData.fundingStage} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                <option value="" className="bg-black text-white">Select Stage</option>
                <option value="Seed" className="bg-black text-white">Seed</option>
                <option value="Design Tech" className="bg-black text-white">Design Tech</option>
                <option value="Artificial Intelligence" className="bg-black text-white">Artificial Intelligence</option>
                <option value="Developer Tools" className="bg-black text-white">Developer Tools</option>
              </select>
            </div>
            <div><label className={labelClass}>Founder Email *</label><input type="email" name="founderEmail" required value={formData.founderEmail} onChange={handleChange} placeholder="founder@company.com" className={inputClass} /></div>
          </div>

          <div><label className={labelClass}>Description</label><textarea name="description" rows="3" value={formData.description} onChange={handleChange} placeholder="Overview..." className={`${inputClass} resize-none`} /></div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 pt-4 border-t border-current/10">
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-current/20 rounded-lg text-xs font-medium hover:bg-current/5">Cancel</button>
            <button type="submit" disabled={isUploading} className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg disabled:opacity-50 shadow-md">{viewMode === "edit" ? "Update Profile" : "Create Profile"}</button>
          </div>
        </form>
      )}
    </div>
  );
}