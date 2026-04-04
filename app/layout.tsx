import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joe G | Game UI/UX Designer & Web Developer",
  description:
    "Portfolio of Joe G — Game UI/UX designer with a web development background. Designing things people actually want to use.",
  keywords: [
    "UI/UX designer",
    "game UI designer",
    "web developer",
    "product design",
    "portfolio",
  ],
  openGraph: {
    title: "Joe G | Game UI/UX Designer & Web Developer",
    description:
      "Designing things people actually want to use. Game UI/UX designer with a web development background.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe G | Game UI/UX Designer & Web Developer",
    description:
      "Designing things people actually want to use. Game UI/UX designer with a web development background.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rethinkSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
