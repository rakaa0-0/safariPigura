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
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <head>
          <link rel="icon" href="./icon/Logo.png" />
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
