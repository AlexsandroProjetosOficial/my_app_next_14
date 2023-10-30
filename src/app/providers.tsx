'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';
import GlobalStyles from '../styles/GlobalStyles';

export default function Providers({
	children,
}: {
	children: ReactNode
}) {
	const { theme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	)
}