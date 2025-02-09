// hooks/useActiveSection.js
import { useState, useEffect } from 'react';

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Función para manejar el desplazamiento y determinar la sección activa
        const handleScroll = () => {
            // Obtener todas las secciones
            const sections = document.querySelectorAll('section[id$="-section"]');

            // Encontrar la sección más cercana al centro de la pantalla
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

            // Actualizar la sección activa
            if (closestSection) {
                const newActiveSection = closestSection.id.replace('-section', '');
                setActiveSection(newActiveSection);
            }
        };

        // Configurar el observer de intersección
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Si la sección está en el viewport
                    if (entry.isIntersecting) {
                        // Solo actualizar si la sección está más del 50% visible
                        if (entry.intersectionRatio >= 0.5) {
                            setActiveSection(entry.target.id.replace('-section', ''));
                        }
                    }
                });
            },
            {
                // Configuración del observer
                rootMargin: '-10% 0px -10% 0px', // Margen para activar la detección
                threshold: [0.5] // Activar cuando el 50% de la sección sea visible
            }
        );

        // Observar todas las secciones
        const sections = document.querySelectorAll('section[id$="-section"]');
        sections.forEach((section) => observer.observe(section));

        // Agregar event listener para el scroll
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Llamar a handleScroll inicialmente para establecer la sección activa inicial
        handleScroll();

        // Cleanup: remover el observer y el event listener
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Array de dependencias vacío porque solo necesitamos ejecutar esto una vez

    return activeSection;
}