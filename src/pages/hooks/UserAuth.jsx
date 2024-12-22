import { useContext } from "react";
import { AuthContextData } from "../../context/AuthContext";

const userAuth = () => {
  const context = useContext(AuthContextData);
  return context;
};

export default userAuth;
