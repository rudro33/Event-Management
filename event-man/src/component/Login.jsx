


import React from "react";

const Login = ({ onClose }) => {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <button onClick={onClose} className="absolute top-4 right-4 bg-red-200 text-red-600 font-semibold px-4 py-2 rounded-lg hover:bg-red-300 transition">✕ Close</button>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input input-bordered" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input input-bordered" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4 w-full">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
