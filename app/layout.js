
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Country explorer",
  description: "Explore countries and their details",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Navbar />
         <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
