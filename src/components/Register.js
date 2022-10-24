import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        event.target.reset()
      };
    
      return (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl mb-3 text-center font-bold">Register Now!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <Link to="/login" className="label-text-alt link link-hover">
                          Already Have an account?
                        </Link>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Register;