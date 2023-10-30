import { ITheme } from "./ITheme";

interface IThemeContext {
	toggleTheme(): void;
	theme: ITheme;
}

export type { IThemeContext };