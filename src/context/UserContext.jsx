import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const login = (username, password) => {
    if (username === "johnd" && password === "m38rmF$") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const register = async (newUser) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) return false;
      const data = await response.json();
      setUser(data);
      return true;
    } catch (error) {
      console.error("Error en registro:", error);
      return false;
    }
  };
  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);