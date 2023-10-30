'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';
import { IThemeContext } from '../adpters/dtos/themes/IThemeContext';
import { ITheme } from '../adpters/dtos/themes/ITheme';

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ITheme>(dark);

	const toggleTheme = () => {
		if (theme.title === 'dark') {
			setTheme(light);
			if (typeof window !== 'undefined' && window.localStorage) localStorage.setItem('@carteira:theme', JSON.stringify(light));
		} else {
			setTheme(dark);
			if (typeof window !== 'undefined' && window.localStorage) localStorage.setItem('@carteira:theme', JSON.stringify(dark));
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && window.localStorage) {
			const themeSaved = localStorage.getItem('@carteira:theme');

			if (themeSaved) {
				setTheme(JSON.parse(themeSaved));
			} else {
				return setTheme(dark);
			}
		}
	}, [])

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
};

function useTheme(): IThemeContext {
	const context = useContext(ThemeContext);

	return context;
}

export { ThemeProvider, useTheme };