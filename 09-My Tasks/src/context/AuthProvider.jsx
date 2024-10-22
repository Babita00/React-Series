// Import necessary hooks and modules from React and other libraries
import { useState, useEffect } from "react";
import authContext from "./AuthContext"; // Importing the context
import PropTypes from 'prop-types'; // Importing PropTypes to validate component props

// Defining the AuthContext component as a Context Provider
const AuthContext = ({ children }) => {
  // State to manage the user data (null initially, meaning no user is logged in)
  const [user, setUser] = useState(null);

  // Function to handle user login by setting user data
  const login = (userData) => {
    setUser(userData);
  };

  // Function to handle user logout by clearing the user state
  const logout = () => {
    setUser(null);
  };

  // useEffect to synchronize the user state with localStorage
  useEffect(() => {
    if (user) {
      // If a user logs in, save the user data to localStorage
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      // If the user logs out, remove the user data from localStorage
      localStorage.removeItem('user');
    }
  }, [user]); // Runs whenever the `user` state changes

  // Returning the Provider component to wrap the child components
  // and make `user`, `login`, and `logout` accessible via context
  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children} {/* Render the child components inside the provider */}
    </authContext.Provider>
  );
};

// PropTypes to enforce that the `children` prop is required and must be a React node
AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exporting the AuthContext component for use in other parts of the app
export default AuthContext;
