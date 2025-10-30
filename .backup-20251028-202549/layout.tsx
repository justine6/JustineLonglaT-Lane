import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jutellane Solutions | Cloud Confidence. Delivered.",
  description: "Certified DevSecOps and Cloud Automation for startups and growing teams.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={[inter.className, "min-h-dvh bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"].join(" ")}>
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
