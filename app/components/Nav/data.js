// links.js
import { useTranslations } from '../hooks/useTranslations';

export function useNavLinks() {
  const t = useTranslations();

  return [
    {
      title: t('Header.navbar.home'),
      href: "#home-section"
    },
    {
      title: t('Header.navbar.about'),
      href: "#about2-section"
    },
    {
      title: t('Header.navbar.projects'),
      href: "#projects-section"
    },
    {
      title: t('Header.navbar.experience'),
      href: "#experience-section"
    },
    {
      title: t('Header.navbar.contact'),
      href: "#contact-section"
    }
  ];
}


export const footerLinks = [
  
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/ulises-oreste-developer"
    },
 
    {
        title: "Send Email",
        href: "mailto:ulisesoreste@gmail.com"
    }
]