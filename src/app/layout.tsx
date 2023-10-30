import { ReactNode } from 'react';
import Link from 'next/link';
import StyledComponentsRegistry from './registry';
import { ThemeProvider } from '../hooks/theme';
import Providers from './providers';

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<StyledComponentsRegistry>
					<ThemeProvider>
						<Providers>
							<nav>
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/signup">Sign Up</Link>
									</li>
									<li>
										<Link href="/signin">Sign In</Link>
									</li>
								</ul>
							</nav>
							{children}
						</Providers>
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html >
	)
}
