import { useSelector } from "react-redux";
import { useAuth } from "../Auth/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const detulsUser = useSelector((state) => state.detulsUser);
  const getUser =
    detulsUser !== "" && detulsUser !== null ? detulsUser[2].userId : "";
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/register" />;
  } else if (window.location.pathname === `/dashboard/cvs/${getUser}`) {
    return <Navigate to={`/dashboard/cvs/${getUser}/personal`} />;
  }
  return children;
};

export default RequireAuth;
