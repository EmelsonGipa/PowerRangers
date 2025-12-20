import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "theme";

function getInitialTheme(): Theme {
	// localStorage preferred, fallback to system preference
	try {
		const stored = localStorage.getItem(THEME_KEY);
		if (stored === "light" || stored === "dark") return stored;
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
	} catch {}
	return "light";
}

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

	const apply = useCallback((t: Theme) => {
		const root = document.documentElement;
		if (t === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		try { localStorage.setItem(THEME_KEY, t); } catch {}
		setTheme(t);
	}, []);

	useEffect(() => {
		apply(theme);
		// sync if system preference changes
		const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
		const onChange = () => {
			const stored = (() => { try { return localStorage.getItem(THEME_KEY); } catch { return null; } })();
			if (!stored) apply(getInitialTheme());
		};
		mq?.addEventListener?.("change", onChange);
		return () => mq?.removeEventListener?.("change", onChange);
	}, [apply, theme]);

	const toggle = useCallback(() => apply(theme === "dark" ? "light" : "dark"), [apply, theme]);

	return { theme, setTheme: apply, toggle };
}
