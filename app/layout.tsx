import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stookiez Cookiez - Gourmet Brown Butter Cookies",
  description: "Specializing in gourmet brown butter cookies with indulging flavours. Big, freshly baked, quarter pound cookies made with no preservatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
