"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For redirection after login

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Error message state
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // TODO: Add Google login logic (e.g., Firebase Auth, OAuth, etc.)
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message

    // Simple validation for email and password
    if (!email || !password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // Placeholder for API call to validate credentials
    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        router.push("/dashboard"); // Redirect to the dashboard or home page
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 1000);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }

    // Placeholder for password reset logic (e.g., Firebase password reset)
    setTimeout(() => {
      console.log("Password reset link sent to:", email);
      setError("A password reset link has been sent to your email.");
      setLoading(false);
    }, 1000);
  };

  const handleSignup = () => {
    router.push("/signup"); // Navigate to the signup page
  };

  const handleAnonymousLogin = () => {
    console.log("Continue as Anonymous");
    // TODO: Implement anonymous login logic (e.g., Firebase Anonymous Auth)
    router.push("/dashboard"); // Redirect to the dashboard or other page
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {forgotPassword ? "Reset Password" : "Login"}
        </h1>

        {forgotPassword ? (
          <form onSubmit={handlePasswordReset}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Password Reset Link"}
            </button>
            <div className="text-sm text-gray-600 text-center">
              <span
                onClick={() => setForgotPassword(false)}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Back to Login
              </span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
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
              {loading ? "Logging in..." : "Login"}
            </button>
            <div className="text-sm text-gray-600 text-center">
              <span
                onClick={handleForgotPassword}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                Forgot Password?
              </span>
            </div>
          </form>
        )}

        <div className="flex items-center justify-center my-4">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-gray-500 mx-2">OR</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full px-4 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 flex items-center justify-center mb-4"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png" // Use a local or hosted image
            alt="Google Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Login with Google
        </button>

        <button
          onClick={handleAnonymousLogin}
          className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mb-4"
        >
          Continue as Anonymous
        </button>

        <div className="text-sm text-gray-600 text-center">
          <span className="mr-2">Don&lsquo;t have an account?</span>
          <span
            onClick={handleSignup}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
