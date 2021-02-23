import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		border?: string;
		align?: string;
		name?: string;
  }
}

type Props = {
};

class Document extends NextDocument<Props> {
	render() {
		return (
			<Html >
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.GA_TRACKING_ID}', {
								page_path: window.location.pathname,
							});
						`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
