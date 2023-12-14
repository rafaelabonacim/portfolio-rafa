import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
	title: "Rafaela Bonacim",
	description:
		"Rafaela Bonacim is a software engineer passionate to developing amazing interfaces, with +5 years of experience in IT and +2 years as Front-End, who is constantly seeking for new challenges.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">	<head>
		<link rel="icon" href="/favicon.ico" />
	</head>	<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
