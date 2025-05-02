import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Inter } from "next/font/google";
import { Fira_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Custom font variable
});

const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // ✅ Specify the weights explicitly
  variable: "--font-mono", // Custom font variable
});

export const metadata = {
  title: "SkillQuest",
  description: "Level up your skills with quests!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-grow animate-fadeIn">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
