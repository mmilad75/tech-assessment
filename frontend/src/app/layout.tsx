import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { interFont } from "@/fonts";
import HeaderNav from "@/components/header-nav";
import Footer from "@/components/footer";
import {
  footerLinks,
  headerHelpButton,
  headerTabs,
  profileButton,
  socialMedia,
} from "@/server/mock-data";
import "./globals.css";
import MobileNav from "@/components/mobile-nav";
import ApolloClientProvider from "@/services/graphql/apollo-client-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.variable} font-sans bg-elevation-background text-secondary`}>
        <ApolloClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <HeaderNav
              tabs={headerTabs}
              helpButton={headerHelpButton}
              profileButton={profileButton}
            />
            <MobileNav tabs={headerTabs} />
            <main className="my-8">{children}</main>
            <Footer socialMedia={socialMedia} links={footerLinks} />
          </ThemeProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
