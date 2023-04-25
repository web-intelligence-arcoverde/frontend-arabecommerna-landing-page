import { useEffect, useState } from 'react';
import { allSectionsMock } from '@/__mocks__';

export const useScrollSection = (allSections) => {
  const [currentSection, setCurrentSection] = useState(allSections[0]);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionFilter = allSectionsMock.find(
            (item) => item.id === section.id
          );
          if (sectionFilter) {
            setCurrentSection(sectionFilter);
          } else {
            setCurrentSection(null);
          }
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currentSection;
};