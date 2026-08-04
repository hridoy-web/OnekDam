import { Outfit, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight:["400", "500", "600", "700", "800", "900"]
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "OnekDam - Tech & Gadget Store",
  description: "Get the best tech gadgets at the best price in Bangladesh",
};

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">

        <Navbar/>
        
        <main className="grow">
          {children}
        </main>

      </body>
    </html>
  );
}
