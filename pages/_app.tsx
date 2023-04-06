import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";

const plusJosefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${plusJosefinSans.variable} font-josefin`}>
      <Component {...pageProps} />
    </main>
  );
}
