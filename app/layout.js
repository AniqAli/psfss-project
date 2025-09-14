import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/global/Header";

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
  title: "Home | Private File Sharing Sysytem",
  description: "Home | Private File Sharing Sysytem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aptos.variable} antialiased`}
      >
        <Header />
        <div className="max-w-7xl md:px-6 px-4 lg:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}
