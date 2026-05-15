import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  });

  // เก็บ user เต็มก้อนจาก backend
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [userId, setUserId] = useState(
    () => localStorage.getItem("user_id") || ""
  );

  const [userName, setUserName] = useState(
    () => localStorage.getItem("user_name") || ""
  );

  const [roleName, setRoleName] = useState(
    () => localStorage.getItem("role_name") || ""
  );

  const [prodPlant, setprodPlant] = useState(
    () => localStorage.getItem("Area_Code") || ""
  );

  const [lastActivityTime, setLastActivityTime] = useState(() => {
    return JSON.parse(localStorage.getItem("lastActivityTime")) || Date.now();
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("user_id");

    if (token && storedUserId) {
      setIsAuthenticated(true);
      setUserId(storedUserId);
    }

    const timeout = setTimeout(() => {
      if (isAuthenticated && Date.now() - lastActivityTime > SESSION_TIMEOUT) {
        logout();
      }
    }, SESSION_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [isAuthenticated, lastActivityTime]);

  const updateActivityTime = () => {
    const now = Date.now();
    setLastActivityTime(now);
    localStorage.setItem("lastActivityTime", JSON.stringify(now));
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateActivityTime);
    window.addEventListener("keydown", updateActivityTime);
    return () => {
      window.removeEventListener("mousemove", updateActivityTime);
      window.removeEventListener("keydown", updateActivityTime);
    };
  }, []);

  // ⬇⬇⬇ ตรงนี้คือจุดสำคัญ: login รับ userData จาก backend โดยตรง
  const login = (userData) => {
    setIsAuthenticated(true);

    setUser(userData);
    setUserId(userData.User_ID);
    setUserName(userData.User_Name);
    setRoleName(userData.Role_Name);
      setprodPlant(userData.Area_Code);

    updateActivityTime();

    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    localStorage.setItem("token", "some-token");
    localStorage.setItem("user_id", userData.User_ID);
    localStorage.setItem("user_name", userData.User_Name);
    localStorage.setItem("role_name", userData.Role_Name);
    localStorage.setItem("Area_Code", userData.Area_Code);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserId(null);
    setRoleName("");
    setprodPlant("");
    setUserName("");
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,      // 👈 มีทั้งก้อน: {ID, User_ID, User_Name, Role_Name, ...}
        userId,
        userName,
        roleName,
        prodPlant,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
