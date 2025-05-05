import './globals.css';
import { LanguageProvider } from './context/languageContext';
import { ThemeProvider } from './components/themeContext/themeContext';
import ThemeAwareLayout from './components/layoutTheme/layoutTheme';
import Header from './components/header/page';
import Footer from './footer/page';



export const metadata = {
  title: "Ulises Oreste",
  description: "Portfolio Web Developer - Ulises Oreste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <ThemeAwareLayout>
              <Header />
              {children}
              <Footer />
            </ThemeAwareLayout>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
