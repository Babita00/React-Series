# Context Api

## useContext

useContext is a React hook that allows components to access the context values (data) provided by the nearest ThemeProvider in the component tree. It simplifies accessing shared data across multiple components without needing to pass props manually.

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

## ThemeContext:

ThemeContext is created to share theme-related data (like `themeMode`, `darkTheme`, and `lightTheme` functions) across components without needing to pass props manually through each level.

If we haven't use ThemeContext we have to pass props manually

```jsx
import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        {/* Passing props to ThemeBtn */}
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn
            themeMode={themeMode}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
        </div>

        {/* Passing props to Card if needed */}
        <div className="w-full max-w-sm mx-auto">
          <Card themeMode={themeMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
```

- With useContext:
  You only need to define context once, and all components can access shared data easily without passing props.

- Without useContext:
  You need to manually pass props through each component, which can become cumbersome if you have deeply nested components.

## ThemeProvider

ThemeProvider is a special component from ThemeContext that wraps parts of the app to make the context values (`themeMode`, `darkTheme`, and `lightTheme`) available to all nested components.

### Wrapping with ThemeProvider in App

When you wrap components inside ThemeProvider, those components (e.g., `Card`, `ThemeBtn`) can access `themeMode` and the functions to change the theme using `useContext(ThemeContext)`. This makes the theme data accessible to these components directly, so they can read the current theme and switch between light and dark modes.
