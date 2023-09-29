import { useAuth } from "../Auth/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) return <Navigate to="/register" />;
  return children;
};

export default RequireAuth;
