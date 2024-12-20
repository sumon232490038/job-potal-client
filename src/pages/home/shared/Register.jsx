import Lottie from "lottie-react";
import registerLottieData from "../../../assets/lottie/register.json";
import { useContext } from "react";
import { AuthContextData } from "../../../context/AuthContext";

const Register = () => {
  const { createNewUser } = useContext(AuthContextData);
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const register = { email, password };
    createNewUser(email, password)
      .then((reuslt) => {
        console.log(reuslt.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-96 lg:text-left">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-5 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleFormData} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                name="password"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
