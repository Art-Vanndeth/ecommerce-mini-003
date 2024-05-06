import "@/app/globals.css";
import SessionWrapper from "@/app/SessionProvider";
import StoreProvider from "@/app/StoreProvider";
import {Providers} from "@/app/(user)/providers";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/(user)/error";
import {Suspense} from "react";
import Loading from "@/app/(user)/loading";
import FooterComponent from "@/components/footer/FooterComponent";
export default function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
		<SessionWrapper>
			<body
			>
			<StoreProvider>
				<Providers>
					<ErrorBoundary errorComponent={Error}>
						<Suspense fallback={<Loading/>}>{children}</Suspense>
					</ErrorBoundary>
				</Providers>
			</StoreProvider>
			</body>
		</SessionWrapper>
		</html>
	);
}
