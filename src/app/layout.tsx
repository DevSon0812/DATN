import { Footer, Header } from '@/layout';
import type { Metadata } from 'next';
import './index.scss';
// provider
import { ReactQueryProvider } from '@/query/ReactQueryProvider';
import { ReduxProvider } from '@/redux/ReduxProvider';

export const metadata: Metadata = {
	title: 'Jeans | Denim Jackets & Clothing | SonTruong Official Site ',
	description: 'Clothing for Men | Women | Kids',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<ReactQueryProvider>
					<ReduxProvider>{children}</ReduxProvider>
				</ReactQueryProvider>
				<Footer />
			</body>
		</html>
	);
}
