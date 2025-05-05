
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


export function useFooterLinks() {
  const t = useTranslations();

  return [
    {
      title: t('Header.navbar.linkedIn'),
      href: "https://www.linkedin.com/in/ulises-oreste-developer"
    },
    {
      title: t('Header.navbar.sendEmail'),
      href: "mailto:ulisesoreste@gmail.com"
    }
  ];
}