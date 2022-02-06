import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<div className="flash-text" />
				<div className="backdrop" />
				<div className="overlay" />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
