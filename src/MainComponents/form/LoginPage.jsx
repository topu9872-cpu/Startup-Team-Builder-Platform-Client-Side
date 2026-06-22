"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeClosed, Mail, Lock, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const [focused, setFocused] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused("");
  const router = useRouter();
  // Framer Motion Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  // Background ambient pulse variant
  const glowVariants = {
    animate: (delay) => ({
      scale: [1, 1.08, 1],
      opacity: [0.15, 0.25, 0.15],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    }),
  };
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      remamber:formData.remamber
    });

    if (data) {
      router.push(redirectTo);
      toast.success("Account Created Successfully !");
    } else if (error) {
      toast.error("Something want !");
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
      {/* Framer-animated Background Ambient Glows */}
      <motion.div
        custom={0}
        variants={glowVariants}
        animate="animate"
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        custom={2}
        variants={glowVariants}
        animate="animate"
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl pointer-events-none"
      />

      {/* Login Card */}
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
            className="text-3xl font-bold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Welcome Back
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm text-slate-400 mt-2"
          >
            Please enter your details to sign in.
          </motion.p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={{ color: focused === "email" ? "#a78bfa" : "#64748b" }}
              transition={{ duration: 0.2 }}
              className="absolute left-3 top-3.5 h-5 w-5 z-10"
            >
              <Mail className="h-full w-full" />
            </motion.div>
            <motion.input
              type="email"
              placeholder="email"
              name="email"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              animate={{
                borderColor: focused === "email" ? "#8b5cf6" : "#1e293b",
                boxShadow:
                  focused === "email"
                    ? "0 0 0 1px #8b5cf6"
                    : "0 0 0 0px transparent",
              }}
              transition={{ duration: 0.2 }}
              className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border rounded-lg focus:outline-none text-slate-200"
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

          {/* Remember Me & Forgot Password Utilities */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between text-xs text-slate-400"
          >
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
              name="remamber"
                type="checkbox"
                className="accent-purple-500 rounded border-slate-800 bg-slate-950/50 focus:ring-0 focus:ring-offset-0"
              />
              Remember me
            </label>
            <motion.a
              href="#"
              whileHover={{ color: "#c084fc" }}
              className="hover:underline"
            >
              Forgot password?
            </motion.a>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-purple-500/20 group"
          >
            Sign In
            <motion.div
              variants={{
                hover: { x: 4 },
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="relative flex py-5 items-center"
        >
          <div className="flex border-t border-slate-800"></div>
          <span className="flex mx-4 text-slate-500 text-xs uppercase tracking-wider">
            Or sign in with
          </span>
          <div className="flex border-t border-slate-800"></div>
        </motion.div>

        {/* Social Authentication Buttons */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          {/* Google Button */}
          <motion.button
            onClick={handleGoogleSignup}
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(30, 41, 59, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-950/40 border border-slate-800 rounded-lg text-slate-300 transition-colors duration-200"
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
          </motion.button>

          {/* GitHub Button */}
          <motion.button
            onClick={handleGitHubSignup}
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(30, 41, 59, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-950/40 border border-slate-800 rounded-lg text-slate-300 transition-colors duration-200"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </motion.button>
        </motion.div>

        {/* Footer Redirect Link */}
        <motion.p
          variants={itemVariants}
          className="text-center flex  text-sm text-slate-500 mt-8"
        >
          Don't have an account yet?{" "}
          <Link
            href={`/signup?redirect=${redirectTo}`}
            className="text-purple-400 underline decoration-purple-400/30 hover:decoration-purple-300"
          >
            Register
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
