import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionRefs) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollBottom = scrollTop + window.innerHeight;

      for (let i = 0; i < sectionRefs.length; i++) {
        const section = sectionRefs[i].current;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollBottom > sectionTop && scrollTop < sectionBottom) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return activeSection;
}