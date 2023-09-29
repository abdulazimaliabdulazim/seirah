import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);
const getUser = JSON.parse(window.localStorage.getItem("userDetuls"));

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(getUser !== null ? getUser.name : null);
  const login = (user) => setUser(user);
  const logout = (user) => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
