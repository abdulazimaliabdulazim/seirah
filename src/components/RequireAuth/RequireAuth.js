import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const detulsUser = useSelector((state) => state.detulsUser);
  if (detulsUser === null) {
    return <Navigate to="/register" />;
  } else if (window.location.pathname === `/dashboard/cvs/data`) {
    return <Navigate to={`/dashboard/cvs/data/personal`} />;
  }
  return children;
};

export default RequireAuth;
