import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const aptos = localFont({
  src: [
    {
      path: "/fonts/aptos/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/aptos/Aptos-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/aptos/Aptos-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
  display: "swap",
});

export const metadata = {
  title: "Aerialink Cloud",
  description: "Aerialink Cloud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aptos.variable} antialiased`}
      >
        <Header />
        <div className="max-w-7xl md:px-6 px-4 xl:px-0 m-auto xl:mt-35 lg:mt-32 mt-27">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
