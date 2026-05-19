import { ClerkProvider } from '@clerk/nextjs';
import { DM_Sans } from "next/font/google";
import Provider from "./provider";
import "./globals.css";
import type { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js Premium Startup Boilerplate",
  description: "Created using the ultimate interactive Next.js stack generator CLI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "dark",
      }}
    >
      <html lang="en" className={dmSans.variable}>
        <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
