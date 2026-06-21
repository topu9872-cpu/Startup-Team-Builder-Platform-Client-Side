"use client";

import { useState, useEffect } from "react";
import { uploadImage } from "@/lib/imageBB";
import toast from "react-hot-toast";
import { founderStartupsDataUpdate } from "@/api/serverMutation";

export default function StartupUpdateModal({ company }) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = Object.fromEntries(new FormData(e.target));

      const imageUrl = await uploadImage(image);
      const updateData = {
        ...formData,
        logo: imageUrl,
      };

      const res = await founderStartupsDataUpdate(company._id, updateData);

      if (res?.acknowledged || res?.modifiedCount) {
        toast.success("Updated successfully!");
      } else {
        toast.error("Nothing updated");
      }

      setIsOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Structured Layout Style Tokens
  const formGroupClassName = "flex flex-col w-full";
  const labelClassName =
    "text-zinc-400 text-xs font-semibold tracking-wide block mb-1.5";
  const inputClassName =
    "w-full bg-zinc-900/60 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-zinc-200 rounded-xl h-11 px-4 text-sm -none transition-all duration-200 box-border";

  return (
    <>
      {/* TRIGGER INTERACTION BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-3 py-1.5 text-xs font-semibold text-purple-400 bg-purple-500/5 border border-purple-500/20 rounded-xl hover:bg-purple-500/20 active:scale-95 transition-all duration-200"
      >
        ✏️ Edit
      </button>

      {/* OVERLAY SYSTEM MASK */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* CONTAINMENT WINDOW */}
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800/80 rounded-2xl shadow-2xl flex flex-col max-h-full overflow-hidden text-left transform transition-all z-10 animate-in fade-in zoom-in-95 duration-200 box-border">
            {/* CLOSE ACTION BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 p-1.5 rounded-lg transition-colors z-20"
            >
              ✕
            </button>

            <form
              onSubmit={handleUpdate}
              className="w-full flex flex-col overflow-hidden"
            >
              {/* FIXED STATIC HEADER */}
              <div className="border-b border-zinc-900/80 px-6 py-5 bg-linear-to-b from-zinc-900/10 to-transparent shrink-0">
                <h2 className="text-xl font-bold tracking-tight text-white bg-linear-to-r from-white to-zinc-400 bg-clip-text ">
                  Update Startup Profile
                </h2>
                <p className="text-xs text-zinc-500 font-normal mt-1 tracking-wide">
                  Modify core documentation properties and platform indexing
                  fields below.
                </p>
              </div>

              {/* VERTICAL-ONLY SCROLL FORM FIELDS CONTAINER */}
              <div className="space-y-5 px-6 py-6 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-14rem)] custom-scrollbar box-border">
                {/* Row 1: Core Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className={formGroupClassName}>
                    <label className={labelClassName}>Startup Name *</label>
                    <input
                      name="startupName"
                      type="text"
                      defaultValue={company?.startupName}
                      className={inputClassName}
                    />
                  </div>

                  <div className={formGroupClassName}>
                    <label className={labelClassName}>Founder Name *</label>
                    <input
                      name="founderName"
                      type="text"
                      defaultValue={company?.founderName}
                      className={inputClassName}
                      required
                    />
                  </div>
                  <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-4 flex flex-col md:flex-row gap-5 items-start md:items-center justify-between box-border">
                    <div className="flex-1 w-full">
                      <label className="block text-zinc-400 text-xs font-semibold tracking-wide mb-2">
                        Update Platform Brand Logo Asset
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setImage(e.target.files?.[0])}
                        className="block w-full text-xs text-zinc-400 bg-zinc-900/60 border border-zinc-800 rounded-xl p-2 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white file:hover:bg-purple-500 file:cursor-pointer transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Sector Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className={formGroupClassName}>
                    <label className={labelClassName}>
                      Industry Vertical *
                    </label>
                    <input
                      name="industry"
                      type="text"
                      defaultValue={company?.industry}
                      className={inputClassName}
                    />
                  </div>

                  <div className={formGroupClassName}>
                    <label className={labelClassName}>Team Size Needed</label>
                    <input
                      name="teamSizeNeeded"
                      type="number"
                      defaultValue={company?.teamSizeNeeded}
                      className={inputClassName}
                      min="0"
                    />
                  </div>
                </div>

                {/* Row 3: Pipelines & Dropdown Selector */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className={formGroupClassName}>
                    <label className={labelClassName}>
                      Founder Contact Email *
                    </label>
                    <input
                      name="founderEmail"
                      type="email"
                      defaultValue={company?.founderEmail}
                      className={inputClassName}
                    />
                  </div>

                  <div className={formGroupClassName}>
                    <label className={labelClassName}>Funding Stage</label>
                    <select
                      name="fundingStage"
                      defaultValue={company?.fundingStage || ""}
                      className={`${inputClassName} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a1a1aa%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-size-[10px_auto] bg-position-[right_1rem_center] bg-no-repeat`}
                    >
                      <option value="" className="bg-zinc-950 text-zinc-400">
                        Select Stage
                      </option>
                      <option
                        value="Seed"
                        className="bg-zinc-950 text-zinc-200"
                      >
                        Seed
                      </option>
                      <option
                        value="Design Tech"
                        className="bg-zinc-950 text-zinc-200"
                      >
                        Design Tech
                      </option>
                      <option
                        value="Artificial Intelligence"
                        className="bg-zinc-950 text-zinc-200"
                      >
                        Artificial Intelligence
                      </option>
                      <option
                        value="Developer Tools"
                        className="bg-zinc-950 text-zinc-200"
                      >
                        Developer Tools
                      </option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Description Narrative */}
                <div className={formGroupClassName}>
                  <label className={labelClassName}>
                    Elevator Pitch Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={company?.description}
                    rows={4}
                    className="w-full bg-zinc-900/60 border border-zinc-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-zinc-200 rounded-xl p-3 text-sm -none transition-all duration-200 resize-none box-border"
                  />
                </div>

                {/* Row 5: Branding Brand File Assets Block */}
              </div>

              {/* FIXED STATIC FOOTER CONTROL PANEL */}
              <div className="border-t border-zinc-900/80 px-6 py-4 flex gap-3 justify-end bg-linear-to-t from-zinc-900/10 to-transparent shrink-0">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={loading}
                  className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl text-xs font-semibold px-4 h-10 transition-colors duration-150"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold px-5 h-10 shadow-lg shadow-purple-600/10 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-150 flex items-center justify-center"
                >
                  {loading ? "Updating..." : "Update Startup"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
