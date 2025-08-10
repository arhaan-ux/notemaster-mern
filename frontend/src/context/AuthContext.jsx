// import React, { createContext, useContext, useState, useEffect } from 'react'
// import axios from 'axios'

// const AuthContext = createContext()

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [token, setToken] = useState(null)

//   // API base URL - will connect to our backend later
//   const API_URL = 'http://localhost:5000/api'

//   useEffect(() => {
//     // For now, just set loading to false
//     // Later we'll check for saved tokens
//     setLoading(false)
//   }, [])

//   const login = async (email, password) => {
//     try {
//       // For now, simulate login (we'll connect to backend later)
//       console.log('Login attempt:', email, password)
      
//       // Simulate success
//       const fakeUser = { id: 1, email, username: 'testuser' }
//       setUser(fakeUser)
//       setToken('fake-token')
      
//       return { success: true }
//     } catch (error) {
//       return { 
//         success: false, 
//         message: 'Login failed' 
//       }
//     }
//   }

//   const signup = async (username, email, password) => {
//     try {
//       console.log('Signup attempt:', username, email, password)
      
//       // Simulate success
//       const fakeUser = { id: 1, email, username }
//       setUser(fakeUser)
//       setToken('fake-token')
      
//       return { success: true }
//     } catch (error) {
//       return { 
//         success: false, 
//         message: 'Signup failed' 
//       }
//     }
//   }

//   const logout = () => {
//     setUser(null)
//     setToken(null)
//   }

//   return (
//     <AuthContext.Provider value={{
//       user,
//       token,
//       loading,
//       login,
//       signup,
//       logout,
//       isAuthenticated: !!token
//     }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

















import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api"; // use the axios instance we created

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Load token & user from localStorage on first render
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // LOGIN
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      if (res.data.success) {
        setUser(res.data.user);
        setToken(res.data.token);

        // Save to localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        return { success: true };
      }
      return { success: false, message: res.data.message || "Login failed" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Server error",
      };
    }
  };

  // SIGNUP
  const signup = async (username, email, password) => {
    try {
      const res = await api.post("/auth/signup", { username, email, password });
      if (res.data.success) {
        setUser(res.data.user);
        setToken(res.data.token);

        // Save to localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        return { success: true };
      }
      return { success: false, message: res.data.message || "Signup failed" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Server error",
      };
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
