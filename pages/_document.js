import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
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
}

// export default function Document() {
// 	return (
// 		<Html>
// 			<Head />
// 			<body>
// 				<div className="flash-text" />
// 				<div className="backdrop" />
// 				<div className="overlay" />
// 				<Main />
// 				<NextScript />
// 			</body>
// 		</Html>
// 	);
// }
