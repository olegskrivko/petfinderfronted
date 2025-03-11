import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // useNavigate should be used within components that are inside the Router

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username,
        password,
      });

      const { access, refresh } = response.data;
      // new
       // Decode the access token to get user information
      //  const decodedToken = jwtDecode(access);
      //  const userId = decodedToken.user_id;

      // Store tokens in localStorage
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      // setUser({ accessToken: access });
      // new
            // Set user data in state
            // setUser({ accessToken: access, userId });

            // Fetch user details after storing tokens
    await fetchUserDetails();

      return true;
    } catch (err) {
      console.error('Login failed:', err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    navigate('/login'); // Using navigate inside a component wrapped by Router
  };
// new
  const getCurrentUser = () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return null;

      const decodedToken = jwtDecode(accessToken);
      return { userId: decodedToken.user_id };
    } catch (err) {
      console.error('Error decoding token:', err);
      return null;
    }
  };

  const fetchUserDetails = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) return;
  
      const response = await axios.get("http://127.0.0.1:8000/api/auth/user/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      // setUser({
      //   userId: response.data.id,
      //   username: response.data.username,
      //   email: response.data.email,
      // });

      if (response.data && response.data.username && response.data.email) {
        setUser({
          userId: response.data.id,
          username: response.data.username,
          email: response.data.email,
        });
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };
  
  // Fetch user details on component mount
  React.useEffect(() => {
    fetchUserDetails();
  }, []);
  

    // On initial load, check if the user is already logged in
    // React.useEffect(() => {
    //   const existingUser = getCurrentUser();
    //   if (existingUser) {
    //     setUser(existingUser);
    //   }
    // }, []);
    useEffect(() => {
      const existingUser = getCurrentUser();
      if (existingUser) {
        fetchUserDetails(); // Fetch full user details if logged in
      }
    }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// its better to remove decode and do aditional request