import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
	const { theme, toggle } = useTheme();
	return (
		<button
			type="button"
			onClick={toggle}
			className={`inline-flex items-center justify-center p-1.5 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${className}`}
			aria-label="Toggle theme"
			title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			{theme === "dark" ? (
				// sun icon
				<svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.41 1.41M7.05 16.95l-1.41 1.41M18.36 18.36l-1.41-1.41M7.05 7.05L5.64 5.64M12 7a5 5 0 100 10 5 5 0 000-10z" />
				</svg>
			) : (
				// moon icon
				<svg className="w-5 h-5 text-gray-600 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
				</svg>
			)}
		</button>
	);
};

export default ThemeToggle;
