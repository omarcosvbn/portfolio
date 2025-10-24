import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import localFont from "next/font/local";

const ramona = localFont({
  src: "../../public/fonts/Ramona-Light.ttf",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "It's my portfolio, nothing more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ramona.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
