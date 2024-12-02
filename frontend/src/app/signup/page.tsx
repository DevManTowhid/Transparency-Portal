"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For redirection after signup

const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Error message state
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleGoogleSignup = () => {
    console.log("Google Signup Clicked");
    // TODO: Add Google signup logic (e.g., Firebase Auth, OAuth, etc.)
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message

    // Simple validation for email, password, and password confirmation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Placeholder for API call to create an account
    setTimeout(() => {
      if (email === "test@example.com") {
        setError("An account with this email already exists");
        setLoading(false);
      } else {
        console.log("Account created successfully");
        router.push("/login"); // Redirect to login after successful signup
      }
    }, 1000);
  };

  const handleAnonymousSignup = () => {
    console.log("Continue as Anonymous");
    // TODO: Implement anonymous signup logic (e.g., Firebase Anonymous Auth)
    router.push("/dashboard"); // Redirect to the dashboard or other page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4">{error}</div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="text-sm text-gray-600 text-center">
          <span className="text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Login here
            </span>
          </span>
        </div>

        <div className="flex items-center justify-center my-4">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500 mx-2">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 flex items-center justify-center mb-4"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png" // Use a local or hosted image
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign Up with Google
        </button>

        <button
          onClick={handleAnonymousSignup}
          className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Continue as Anonymous
        </button>
      </div>
    </div>
  );
};

export default Signup;
