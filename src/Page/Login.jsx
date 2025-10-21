import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = use(AuthContext);
  const location = useLocation();
  
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   
    signIn(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center ">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center font-semibold pt-5">
              Don't have an account?{" "}
              <Link to="/auth/register">
                <span className="text-secondary">Register</span>
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
