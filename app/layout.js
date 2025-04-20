
// import Header from "../[locale]/components/header/page";
// import Footer from "../[locale]/footer/page";
// import "../[locale]/globals.css";
// import { ThemeProvider } from '../[locale]/components/themeContext/themeContext';
// import ThemeAwareLayout from '../[locale]/components/layoutTheme/layoutTheme';
// import Head from "next/head";
// import {NextIntlClientProvider} from 'next-intl';
// import {getMessages} from 'next-intl/server';
// import {notFound} from 'next/navigation';
// import {routing} from '@/i18n/routing';


// export const metadata = {
//   title: "Ulises Oreste",
//   description: "Porfolio Web Developer - Ulises Oreste",
// };




// export default async function RootLayout({ children, intro, params }) {

//   const { locale } = params;

//   // Ensure that the incoming `locale` is valid
//   if (!routing.locales.includes(locale)) {
//     notFound();
//   }

//   // Fetch messages for the current locale
//   const messages = await getMessages();


//   return (
//     <html lang={locale}>
//       <Head>
//       <meta name="viewport" content="width=device-width, initial-scale=1"/>

//       <link  href="portfolio\public\img\ulibynok.png" as="image"/>
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
//             <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Handjet:wght@100..900&family=SUSE:wght@100..800&display=swap" rel="stylesheet"/>
//             </Head>
//             <body className="flex flex-col h-full w-full  overflow-hidden">
//               <ThemeProvider>
//                 <ThemeAwareLayout>
//                   <Header />
//                   {children}
//                   {intro}
//                   <Footer />
//                 </ThemeAwareLayout>
//               </ThemeProvider>
//             </body>
//           </html>
//           );
// }

// import Header from "../[locale]/components/header/page";
// import Footer from "../[locale]/footer/page";
// import "../[locale]/globals.css";
// import { ThemeProvider } from '../[locale]/components/themeContext/themeContext';
// import ThemeAwareLayout from '../[locale]/components/layoutTheme/layoutTheme';
// import Head from "next/head";
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
// import { notFound } from 'next/navigation';
// import { routing } from '@/i18n/routing';
// import Script from "next/script";

// export const metadata = {
//   title: "Ulises Oreste",
//   description: "Porfolio Web Developer - Ulises Oreste",
// };

// export default async function RootLayout({ children, intro, params }) {
//   const { locale } = await params;

//   // Ensure that the incoming `locale` is valid
//   if (!routing.locales.includes(locale)) {
//     notFound();
//   }

//   // Fetch messages for the current locale
//   const messages = await getMessages();

//   return (
//     <html lang={locale}>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1"/>
//         <link href="portfolio/public/img/ulibynok.png" as="image" />
//         <link rel="preconnect" href="https://fonts.googleapis.com"/>
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Handjet:wght@100..900&family=SUSE:wght@100..800&display=swap" 
//           rel="stylesheet" 
//         />
//     <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function() {
//                 try {
//                   var savedTheme = localStorage.getItem('theme');
//                   var systemPrefersDark = window.matchMedia && 
//                     window.matchMedia('(prefers-color-scheme: dark)').matches;

//                   var initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

//                   if (initialTheme === 'dark') {
//                     document.documentElement.classList.add('dark');
//                     document.documentElement.style.colorScheme = 'dark';
//                   } else {
//                     document.documentElement.classList.remove('dark');
//                     document.documentElement.style.colorScheme = 'light';
//                   }
//                 } catch (e) {
//                   console.error('Error accessing localStorage:', e);
//                 }
//               })();
//             `,
//           }}
//         />
//       </Head>
//       <body className="flex flex-col h-full w-full overflow-hidden">
//         <NextIntlClientProvider messages={messages}>
//           <ThemeProvider>
//             <ThemeAwareLayout>
//               <Header />
//               {children}
//               {intro}
//               <Footer />
//             </ThemeAwareLayout>
//           </ThemeProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }



// import Header from "./components/header/page";
// import Footer from "./footer/page";
// import "./globals.css";
// import { ThemeProvider } from './components/themeContext/themeContext';
// import ThemeAwareLayout from './components/layoutTheme/layoutTheme';
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
// import { notFound } from 'next/navigation';
// import { routing } from '@/i18n/routing';
// import { ThemeScript } from './components/themeScript/themeScript';

// export const metadata = {
//   title: "Ulises Oreste",
//   description: "Porfolio Web Developer - Ulises Oreste",
// };

// export default async function RootLayout({ children, intro, params }) {
//   let locale;

//   try {
//     if (params && typeof params.then === 'function') {
//       const resolvedParams = await params;
//       locale = resolvedParams.locale;
//     } else {
//       locale = params?.locale;
//     }
//     if (!locale) {
//       locale = routing.defaultLocale || 'en';
//     }
//     if (!routing.locales.includes(locale)) {
//       return notFound();
//     }
//   } catch (error) {
//     console.error("Error al obtener el locale:", error);
//     locale = routing.defaultLocale || 'en';
//   }
//   let messages;
//   try {
//     messages = await getMessages({ locale });
//   } catch (error) {
//     console.error(`Error al cargar mensajes para locale '${locale}':`, error);
//     messages = {};
//   }

//   return (
//     <html lang={locale}>
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="preload" href="/img/ulibynok.png" as="image" />

//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Handjet:wght@100..900&family=SUSE:wght@100..800&display=swap"
//           rel="stylesheet"
//         />
//         <ThemeScript />
//       </head>
//       <body className="flex flex-col h-full w-full overflow-hidden">
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <ThemeProvider>
//             <ThemeAwareLayout>
//               <Header />
//               {children}
//               {intro}
//               <Footer />
//             </ThemeAwareLayout>
//           </ThemeProvider>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }


// // app/[locale]/layout.js
// // import { NextIntlClientProvider } from 'next-intl';
// // import { getMessages } from 'next-intl/server';
// import Header from "./components/header/page";
// import Footer from "./footer/page";
// import "./globals.css";
// import { ThemeProvider } from './components/themeContext/themeContext';
// import ThemeAwareLayout from './components/layoutTheme/layoutTheme';
// import { ThemeScript } from './components/themeScript/themeScript';



// export const metadata = {
//   title: "Ulises Oreste",
//   description: "Porfolio Web Developer - Ulises Oreste",
// };

// // Componente cliente para partes que no deben re-renderizarse por completo
// // import dynamic from 'next/dynamic';

// // const PersistentLayout = dynamic(() => import('./components/persistentLayout/persistentLayout'), {
// //   ssr: true
// // });

// export default async function RootLayout({ children, intro, params: paramsPromise }) {
//   const params = await paramsPromise;
//   const locale = params?.locale || 'es';
//   // const messages = await getMessages({ locale });

//   return (
//     <html lang={locale}>
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="preload" href="/img/ulibynok.png" as="image" />

//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Handjet:wght@100..900&family=SUSE:wght@100..800&display=swap"
//           rel="stylesheet"
//         />
//         <ThemeScript />
//       </head>
//       <body className="flex flex-col h-full w-full overflow-hidden">
//         {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
//           <ThemeProvider>
//             <ThemeAwareLayout>
//               {/* <PersistentLayout> */}
//                 {children}
//                 {intro}
//               {/* </PersistentLayout> */}
//             </ThemeAwareLayout>
//           </ThemeProvider>
//         {/* </NextIntlClientProvider> */}
//       </body>
//     </html>
//   );
// }

import './globals.css';
import { LanguageProvider } from './context/languageContext';
// import { IntlWrapper } from '../../app/[locale]/components/IntlWrapper/IntlWrapper';
import { ThemeProvider } from './components/themeContext/themeContext';
import ThemeAwareLayout from './components/layoutTheme/layoutTheme';
import Header from './components/header/page';


export const metadata = {
  title: "Ulises Oreste",
  description: "Portfolio Web Developer - Ulises Oreste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {/* <IntlWrapper> */}
            <ThemeProvider>
              <ThemeAwareLayout>
              <Header />
                  {children}
                  
               
              </ThemeAwareLayout>
            </ThemeProvider>
          {/* </IntlWrapper> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
