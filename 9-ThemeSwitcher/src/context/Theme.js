// Import the createContext function from React
import { createContext } from "react";

// Create a ThemeContext with default values

// `themeMode`: Specifies the initial theme mode, set to "light" by default

// `darkTheme`: Placeholder function to switch to dark mode (to be implemented later)
// `lightTheme`: Placeholder function to switch to light mode (to be implemented later)
const ThemeContext = createContext({
  themeMode: "light", // Default theme mode
  darkTheme: () => {}, // Function to apply dark theme (empty for now)
  lightTheme: () => {}, // Function to apply light theme (empty for now)
});

// Export ThemeContext to be used across the app
export default ThemeContext;
