import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreHeader from "./components/Header/PreHeader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "All India Federation of Tax Practitioners",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PreHeader />
        <Header />
       <div>
       {children}
       </div>
       <Footer />
      </body>
    </html>
  );
}
