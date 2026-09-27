import type { Metadata } from "next";
import { Sansita_Swashed, Slabo_13px, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sansitaSwashed = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const slabo = Slabo_13px({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kravings - Africa's touch",
  description: "A place to discover and enjoy authentic African cuisines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", slabo.className, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
