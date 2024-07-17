import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "REDD MATRIX - Transforming Your Online Presence",
  description:
    "At REDD MATRIX, we specialize in innovative web development, graphic designing, and digital marketing services. Our expert team is dedicated to delivering creative solutions that drive business success in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
