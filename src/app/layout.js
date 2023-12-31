import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const pixel = localFont({
  src: [
    {
      path: "../../public/fonts/VT323-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-pixel",
});
export const metadata = {
  title: "Little Dosha Game",
  description: "Created by ComPro blue group students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-0 m-0">
      <body className={`${pixel.variable} overflow-hidden font-sans dark p-0 m-0`}>
        {children}
      </body>
    </html>
  );
}
