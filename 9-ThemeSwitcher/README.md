# Context Api

## code with comment

### Theme.js code with comment

```jsx
// Import the createContext function from React
import { createContext, useContext } from "react";

// Create a ThemeContext with default values

// `themeMode`: Specifies the initial theme mode, set to "light" by default

// `darkTheme`: Placeholder function to switch to dark mode (to be implemented later)
// `lightTheme`: Placeholder function to switch to light mode (to be implemented later)

// Export ThemeContext to be used across the app

export const ThemeContext = createContext({
  themeMode: "light", // Default theme mode
  darkTheme: () => {}, // Function to apply dark theme (empty for now)
  lightTheme: () => {}, // Function to apply light theme (empty for now)
});

// export const ThemeProvider = ({ children }) => {
//   <ThemeContext.Provider>{children}</ThemeContext.Provider>;
// };

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
```
