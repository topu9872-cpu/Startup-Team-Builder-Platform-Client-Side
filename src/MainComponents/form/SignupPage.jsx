"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Eye, EyeClosed } from "lucide-react";
import { FaGithub, FaRegImage } from "react-icons/fa";
import Link from "next/link";
import { uploadImage } from "@/lib/imageBB";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function Signup() {
  const [toggle, setToggle] = useState(false);
  const [focused, setFocused] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("collaborator");
  // Added state to hold values so inputs don't bug out or become invisible

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused("");

  // Framer Motion Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirectTo = searchParam.get("redirect") || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const plan = role === "collaborator" ? "collaborator_free" : "founder_free";
    const formData = Object.fromEntries(new FormData(e.target));

    const imageUrl = await uploadImage(image);

    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      role: role,
      image: imageUrl,
      isBlock: false,
      plan: plan,
    });

    if (data) {
      toast.success("Login Successful !");
      router.push(redirectTo);
    }
    if (error) {
      toast.error(error.message || "Signup failed");
      return;
    }
  };

  const handleGoogleSignup = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  const handleGitHubSignup = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden font-sans">
      {/* Animated Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-700 " />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse " />

      {/* Signup Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-md p-8 mx-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Create an Account
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-400 mt-2"
          >
            Join us and start your journey today.
          </motion.p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div variants={itemVariants} className="relative">
            <User
              className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${focused === "name" ? "text-indigo-400" : "text-slate-500"}`}
            />
            <input
              placeholder="Name"
              name="name"
              type="text"
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 transition-all duration-200"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <FaRegImage
              className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${focused === "image" ? "text-indigo-400" : "text-slate-500"}`}
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              onFocus={() => handleFocus("image")}
              onBlur={handleBlur}
              className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 transition-all duration-200 file:mr-4 file:py-0 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-slate-300 file:cursor-pointer hover:file:bg-slate-700"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants} className="relative">
            <Mail
              className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${focused === "email" ? "text-indigo-400" : "text-slate-500"}`}
            />
            <input
              placeholder="Email"
              name="email"
              type="email"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 transition-all duration-200"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div variants={itemVariants} className="relative">
            <Lock
              className={`absolute left-3 top-3.5 h-5 w-5 transition-colors duration-200 ${focused === "password" ? "text-indigo-400" : "text-slate-500"}`}
            />
            <input
              name="password"
              type={toggle ? "text" : "password"}
              placeholder="Password"
              onBlur={handleBlur}
              className="w-full pl-10 pr-12 py-3 bg-slate-950/50 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-slate-200 transition-all duration-200"
              required
              pattern="(?=.*[A-Z])(?=.*[0-9]).{6,}"
              title="Password must be at least 6 characters, include 1 uppercase letter and 1 number"
            />

            <button
              type="button"
              onClick={() => setToggle(!toggle)}
              className="absolute right-3 top-3.5 text-slate-500 hover:text-indigo-400 transition-colors"
            >
              {toggle ? <Eye size={18} /> : <EyeClosed size={18} />}
            </button>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative space-y-2 flex gap-5"
          >
            <label className="flex items-center gap-2">
              <input
                onChange={(e) => setRole(e.target.value)}
                checked={role === "collaborator"}
                type="radio"
                value="collaborator"
                className="w-4 h-4"
              />
              Collaborator
            </label>

            <label className="flex items-center gap-2">
              <input
                onChange={(e) => setRole(e.target.value)}
                checked={role === "founder"}
                type="radio"
                value="founder"
                className="w-4 h-4"
              />
              Founder
            </label>
          </motion.div>
          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex z-20 items-center justify-center gap-2 py-3 px-4 bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200 group"
          >
            Register
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="relative flex py-5 items-center"
        >
          <div className="flex border-t border-slate-800"></div>
          <span className="flex mx-4 text-slate-500 text-xs uppercase tracking-wider">
            Or continue with
          </span>
          <div className="flex border-t border-slate-800"></div>
        </motion.div>

        {/* Social Authentication Buttons */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          <button
            onClick={handleGoogleSignup}
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-950/40 border border-slate-800 rounded-lg text-slate-300 hover:bg-slate-800/50 transition-colors duration-200"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#EA4335"
                d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.054 14.968 0 12 0 7.303 0 3.287 2.69 1.306 6.614l3.96 3.151z"
              />
              <path
                fill="#4285F4"
                d="M23.491 12.275c0-.796-.073-1.564-.205-2.305H12v4.364h6.441a5.505 5.505 0 01-2.386 3.614l3.714 2.877c2.173-2.005 3.427-4.955 3.427-8.55z"
              />
              <path
                fill="#FBBC05"
                d="M5.266 14.235L1.306 17.386A11.946 11.946 0 0012 24c3.218 0 5.923-1.064 7.895-2.882l-3.714-2.877a7.123 7.123 0 01-4.181 1.168c-3.136 0-5.805-2.114-6.734-4.954z"
              />
              <path
                fill="#34A853"
                d="M1.306 6.614A11.954 11.954 0 000 12c0 1.932.455 3.755 1.306 5.386l4.914-3.823C5.905 13.064 5.864 12.54 5.864 12c0-.54.041-1.064.123-1.577L1.306 6.614z"
              />
            </svg>
            Google
          </button>

          <button
            onClick={handleGitHubSignup}
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-950/40 border border-slate-800 rounded-lg text-slate-300 hover:bg-slate-800/50 transition-colors duration-200"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </button>
        </motion.div>

        {/* Footer Redirect Link */}
        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-slate-500 mt-8"
        >
          Already have an account?
          <Link
            href={`/login?redirecto=${redirectTo}`}
            className="text-indigo-400 hover:underline hover:text-indigo-300 transition-colors"
          >
            Sign In
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
