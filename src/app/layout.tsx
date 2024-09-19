import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Smack",
  description: "A slack clone just for fun!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" className={inter.className}>
        <body>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
