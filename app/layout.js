import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile Page",
  description: "Profile Page Task",
  icons: {
    icon: "../public/next.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/next.png" />
      </head>
      <body className={inter.className}>
        <Toaster />

        {children}
      </body>
    </html>
  );
}
