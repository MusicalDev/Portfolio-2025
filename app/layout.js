
import Header from "@/app/components/header/page";
import Footer from "@/app/footer/page";
import "../app/globals.css";
import { ThemeProvider } from '@/app/components/themeContext/themeContext';
import ThemeAwareLayout from '@/app/components/layoutTheme/layoutTheme';
import Head from "next/head";


export const metadata = {
  title: "Ulises Oreste",
  description: "Porfolio Web Developer - Ulises Oreste",
};




export default function RootLayout({ children, intro }) {

  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <link  href="portfolio\public\img\ulibynok.png" as="image"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Handjet:wght@100..900&family=SUSE:wght@100..800&display=swap" rel="stylesheet"/>
            </Head>
            <body className="flex flex-col h-full w-full  overflow-hidden">
              <ThemeProvider>
                <ThemeAwareLayout>
                  <Header />
                  {children}
                  {intro}
                  <Footer />
                </ThemeAwareLayout>
              </ThemeProvider>
            </body>
          </html>
          );
}
