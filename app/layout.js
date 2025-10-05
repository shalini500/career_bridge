import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Elements/Nav";
import Footer from "@/components/Elements/Footer";
import ScrolltoTop from "../components/Elements/ScrolltoTop";

const font = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "CareerBridge",
  description: "Connecting job seekers with their dream careers",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-[#f8f8ff]`}>
        <Nav />
        {children}
        <Footer />
        <ScrolltoTop />
      </body>
    </html>
  );
}
