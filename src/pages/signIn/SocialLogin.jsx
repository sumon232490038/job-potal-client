import { useContext } from "react";
import { AuthContextData } from "../../context/AuthContext";

const SocialLogin = () => {
  const { sigInbyGoogle } = useContext(AuthContextData);
  const handleGoogleSigIn = () => {
    sigInbyGoogle()
      .then((result) => {
        console.log("google loggin user", result.user);
      })
      .then((error) => console.log(error));
  };
  return (
    <>
      <div className="divider">or</div>
      <button className="btn mb-9 mx-5" onClick={handleGoogleSigIn}>
        SignIn by Google
      </button>
    </>
  );
};

export default SocialLogin;
