import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const getUser = useSelector((state) => state.detulsUser);
  const [user, setUser] = useState(getUser !== null ? getUser[0].name : null);

  const login = (user) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
