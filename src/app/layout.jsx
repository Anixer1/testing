import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata = {
	title: "RAYFLIX",
	description:
		"Online Service To Watch Kdramas And Anime For Free Without Ads .",
	generator: "Next.js",
	applicationName: "RAYFLIX",
	authors: [{ name: "RAY", url: "https://www.facebook.com/animxer" }],
	creator: "RAY",
	keywords: ["Kdrama", "Anime", "Watch Online"],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
		other: {
			me: ["zephex@duck.com"],
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={lexend.className}>
			<body>
				<SpeedInsights />
				<Analytics />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
