import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />;
        {/* <Footer /> */}
      </main>
    </>
  );
}
