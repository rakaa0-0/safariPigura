import type { Metadata } from "next";
import "./globals.css";
import NavbarPage from "@/components/Home/Navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Safari Pigora",
  description: "Safari Pigora - Platform jual beli pigora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="./icon/Logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
        </head>
        <body
        >
          <NavbarPage />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
