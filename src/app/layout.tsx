import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar/navbar";

export const lato = Lato({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
export const latoItalic = Lato({
  weight: ["400", "700"],
  style: "italic",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Post| Home Page",
  description: "Home page for all posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en m-0 p-0">
      <body className={`${lato.className}  antialiased  pt-0 m-0`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
