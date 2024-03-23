import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				{(process.env.NODE_ENV === "development" ||
					process.env.VERCEL_ENV === "preview") && (
					// eslint-disable-next-line @next/next/no-sync-scripts
					<script
						data-project-id="GLPrneePhCAk9RjsxlqzKFhqmFSZsxCazvgjc38s"
						data-is-production-environment="false"
						src="https://snippet.meticulous.ai/v1/meticulous.js"
					/>
				)}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
