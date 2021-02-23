import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import AdSense from 'react-adsense';

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
					<script
						style={{ textAlign: 'center' }}
						type="text/javascript"
						dangerouslySetInnerHTML={{
							__html: `
								google_ad_client = "ca-pub-3545276391244796";
								/* ビッグバナー */
								google_ad_slot = "8206154912";
								google_ad_width = 728;
								google_ad_height = 90;
							`}}
					/>
					<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
