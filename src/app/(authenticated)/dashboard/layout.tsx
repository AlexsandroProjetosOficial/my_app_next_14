import { ReactNode } from 'react';
import Link from 'next/link';

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<nav>
					<ul>
						<li>
							<Link href="/control">Control</Link>
						</li>
						<li>
							<Link href="/dashboard/sales">Sales</Link>
						</li>
						<li>
							<Link href="#">Register</Link>
						</li>
						<li>
							<Link href="#">Invoice</Link>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html >
	)
}