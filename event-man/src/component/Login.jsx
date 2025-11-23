import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // এখানে তোমার login validation logic
    if (email === "test@example.com" && password === "123456") {
      toast.success("Login successful!");
      onClose(); // modal close
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-base-100 w-full max-w-xl p-6 rounded-xl shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-red-200 text-red-600 font-semibold px-4 py-2 rounded-lg hover:bg-red-300 transition"
          >
            ✕ Close
          </button>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-4xl font-bold mb-2">Login now!</h1>
              <p className="text-gray-500">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
              </p>
            </div>

            <div className="card bg-base-200 w-full max-w-sm shadow-2xl flex-1 p-4 rounded-lg">
              <fieldset className="flex flex-col gap-4">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <a className="link link-hover text-blue-500">Forgot password?</a>

                <button
                  className="btn btn-neutral mt-4 w-full"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      {/* Toaster */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Login;
