import "./globals.css";
import type { Metadata } from "next";
import { Asap } from "next/font/google";
import { Header, Sidebar } from "./components";

const inter = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kboom",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-rows-header">
          <Header />
          <div className="grid md:grid-cols-sidebar">
            <Sidebar />
            <main className="w-3/4 p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
