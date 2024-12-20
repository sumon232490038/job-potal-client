import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContextData } from "../../../context/AuthContext";
import logo from "../../../assets/lottie/logo-96.png";
const Navber = () => {
  const { user, signOutUser } = useContext(AuthContextData);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-12" src={logo} alt="" />
          <p>Job Portal</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end space-x-5">
        {user ? (
          <>
            <button className="btn " onClick={handleLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            {" "}
            <Link to={`/register`}>Register</Link>
            <Link to={`/signIn`}>
              <button className="btn">LogIn</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
