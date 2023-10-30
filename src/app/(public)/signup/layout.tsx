import { ReactNode } from 'react';
import SignUpHead from './head';

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang="en">
			<SignUpHead />
			<body>
				{children}
			</body>
		</html >
	)
}