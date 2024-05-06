import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";
import {Providers} from "@/app/(user)/providers";
import FooterComponent from "@/components/footer/FooterComponent";

export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SessionWrapper>
				<body
				>
				<StoreProvider>
					<Providers>
						<header>
							<NavbarComponent/>
						</header>
						<ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading/>}>{children}</Suspense>
						</ErrorBoundary>
					</Providers>
					<footer>
						<FooterComponent/>
					</footer>
				</StoreProvider>
				</body>
			</SessionWrapper>
		</html>
	);
}
