import MainNav from "@/components/main-nav";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
 });

export const metadata = {
  title: "Simple Ticketing App",
  description: "Simple Ticketing App created by Gabriel Sufrir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen">
            <header>
              <MainNav />
            </header>
            {children}
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
