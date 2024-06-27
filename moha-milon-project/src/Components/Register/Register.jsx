import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    // Create User in FireBase / Import the User Create korar function
    console.log(name, mail, pass);
    createUser(mail,pass)
    .then(result =>{
      console.log(result.user)
    })
    .catch (error =>{
      console.error(error)
    })
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
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
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already Have an Account? Please{" "}
              <NavLink to="/login">
                <button className="btn btn-Link">Login</button>
              </NavLink>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
