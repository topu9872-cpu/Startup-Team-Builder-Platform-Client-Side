"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Link2,
  MessageSquare,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { postApply } from "@/api/serverMutation";

export default function ApplyOpportunityForm({ id, user, data }) {

  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const query = {
      opportunittId: id,
      applicantEmail: formData.email,
      portfolioLink: formData.portfolio,
      motivationMessage: formData.motivation,
      status: "pending",
      appliedDate: new Date().toLocaleDateString("en-GB"),
      satartupName: data.startupName,
      roleTitle: data.roleTitle || "No opportunityName",
      founderId: data.userId,
      userid: user?.id,
      role: user?.role,
      name: user?.name,
    };
    const dataPost = await postApply(query);

    setLoading(true);

    if (formData.motivation.trim().length < 15) {
      toast.error("Motivation must be at least 15 characters long.");
      setLoading(false);
      return;
    }

    if (dataPost) {
      window.location.reload();
      toast.success("Successfully submitted!");
    } else {
      toast.error("Somthing Want !");
    }

    setLoading(false);
  };

  if (user?.role !== "collaborator") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md p-6 rounded-2xl border border-rose-500/20 bg-slate-900/80 backdrop-blur-xl shadow-2xl text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-rose-500/10 border border-rose-500/20">
              <ShieldAlert className="text-rose-400 w-6 h-6 animate-pulse" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-rose-300">Access Restricted</h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Only collaborators can apply to opportunities.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-5 px-4 py-2 rounded-lg bg-linear-to-r from-rose-500 to-red-500 text-white text-sm font-medium hover:from-rose-600 hover:to-red-600 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-10 flex items-center justify-center bg-slate-950 overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md p-8 mx-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl z-10"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Apply for Opportunity
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Submit your details below
          </p>
        </div>

        {/* Dynamic Condition Block */}
        <AnimatePresence mode="wait">
          /* APPLICATION FORM fields */
          <motion.form
            key="application-form"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Email */}
            <div className="relative">
              <Mail
                className={`absolute left-3 top-3.5 h-5 w-5 transition-colors ${focused === "email" ? "text-indigo-400" : "text-slate-500"}`}
              />
              <input
                name="email"
                type="email"
                placeholder="Applicant Email"
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Portfolio */}
            <div className="relative">
              <Link2
                className={`absolute left-3 top-3.5 h-5 w-5 transition-colors ${focused === "portfolio" ? "text-indigo-400" : "text-slate-500"}`}
              />
              <input
                name="portfolio"
                type="url"
                placeholder="Portfolio Link"
                onFocus={() => handleFocus("portfolio")}
                onBlur={handleBlur}
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Motivation */}
            <div className="relative">
              <MessageSquare
                className={`absolute left-3 top-3.5 h-5 w-5 transition-colors ${focused === "motivation" ? "text-indigo-400" : "text-slate-500"}`}
              />
              <textarea
                name="motivation"
                rows={4}
                placeholder="Why do you want to join? (min 15 chars)"
                onFocus={() => handleFocus("motivation")}
                onBlur={handleBlur}
                className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg text-slate-200 resize-none focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium transition-all ${
                loading
                  ? "bg-slate-700 cursor-not-allowed"
                  : "bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
