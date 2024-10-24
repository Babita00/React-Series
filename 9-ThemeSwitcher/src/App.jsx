import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light"); // Holds the current theme state: "light" or "dark"

  const lightTheme = () => {
    setThemeMode("light"); // Switch to light theme
  };

  const darkTheme = () => {
    setThemeMode("dark"); // Switch to dark theme
  };

  //actual change in theme
  useEffect(() => {
    // On theme change, update the <html> element's class to reflect the new theme
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]); // Dependency array ensures this runs whenever `themeMode` updates

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
