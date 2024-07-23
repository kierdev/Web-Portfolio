import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/navbar";
import { ThemeSwitch } from "../components/themeSwitch";
import { ThemeProvider } from "@/providers/theme";
import Head from "next/head";
const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kier Hagos | Portfolio",
  description:
    "this website serves as a portfolio developed by Kier Hagos using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_code.className} bg-[--bg]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
