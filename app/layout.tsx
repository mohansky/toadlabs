import type { Metadata } from "next";
import { Inter, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; 
import { Footer } from "@/components/layout/footer/footer"; 
import MainMenu from "@/components/layout/navbar/main-menu";
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toadlabs",
  description: "Toadlabs Holographic Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${open_sans.variable}`}>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainMenu/>
          {/* <Nav /> */}
          <div className="w-screen dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
