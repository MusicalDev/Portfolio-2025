import { useState, useEffect } from 'react';

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id$="-section"]');

            let closestSection = null;
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const centerY = window.innerHeight / 2;
                const sectionCenterY = rect.top + rect.height / 2;
                const distance = Math.abs(centerY - sectionCenterY);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            if (closestSection) {
                const newActiveSection = closestSection.id.replace('-section', '');
                setActiveSection(newActiveSection);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.intersectionRatio >= 0.5) {
                            setActiveSection(entry.target.id.replace('-section', ''));
                        }
                    }
                });
            },
            {
                rootMargin: '-10% 0px -10% 0px',
                threshold: [0.5]
            }
        );

        const sections = document.querySelectorAll('section[id$="-section"]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll, { passive: true });

        handleScroll();
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return activeSection;
}