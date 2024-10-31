import { useState } from "react";

function Theme() {
  const [theme, changeTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="relative container mx-auto p-4">
      <button
        className={`absolute top-2 right-2 ${
          theme === "light" ? "bg-gray-200" : "bg-gray-700"
        } hover:${
          theme === "light" ? "bg-gray-300" : "bg-gray-600"
        } p-1 rounded-full`}
        title={`Current theme: ${theme}`}
        onClick={handleTheme}
      >
        <svg
          className={`w-4 h-4 ${
            theme === "light" ? "text-yellow-500" : "text-yellow-300"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Theme;
