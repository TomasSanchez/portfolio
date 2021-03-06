import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='bg-gray-800 h-screen relative table md:block'>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
export default MyApp;
