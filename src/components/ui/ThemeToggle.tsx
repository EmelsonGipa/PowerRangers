import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  // On mount: read theme from localStorage and apply to document
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default: use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    // eslint-disable-next-line
  }, []);

  // When theme changes, update localStorage and document class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    // localStorage and document class handled by useEffect
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-md transition"
    >
      {theme === "light" ? <Moon size={20} className="text-black" /> : <Sun size={20} className="text-white" />}
    </button>
  );
};

export default ThemeToggle;
