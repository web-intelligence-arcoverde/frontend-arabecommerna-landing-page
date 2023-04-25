import {
  CardButton,
  ContainerDrop,
  ContainerHeader,
  Controls,
  CurrentNavigation,
  CurrentPageActivated,
  LastPage,
  ListNav,
  Navigation,
  VerticalLine,
} from './style';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/assets';
import {
  Button,
  ChangeLanguage,
  ContentMenuMobile,
  DropdownHeader,
  Logo,
} from '@/components';
import { HeaderProps } from '@/types/header';
import { allSectionsMock } from '@/__mocks__';

export const Header = ({ currentPage, lastPage, howItWorks }: HeaderProps) => {
  const buttonName = 'Whatsapp';

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState(howItWorks[0]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };
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
    console.log(currentSection);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <ContainerHeader>
      <Navigation>
        <Logo />
        <CardButton onClick={handleMenu}>
          <Image src={menuActive ? ICONS.Close : ICONS.Menu} alt="icone menu" />
        </CardButton>
        <ListNav>
          <ContainerDrop>
            <VerticalLine />
            {isHovering && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownHeader />
              </div>
            )}
          </ContainerDrop>
          <CurrentPageActivated>{currentPage}</CurrentPageActivated>
          <CurrentNavigation
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#"> {currentSection.name}</a>
            <Image src={ICONS.Arrow} alt="icone dopdrow" />
          </CurrentNavigation>
          <VerticalLine />
          <LastPage href="/traducoes">{lastPage}</LastPage>
        </ListNav>
      </Navigation>
      <Controls>
        <ChangeLanguage />
        <Button>{buttonName}</Button>
      </Controls>
      {menuActive && (
        <ContentMenuMobile buttonName={buttonName} sections={howItWorks} />
      )}
    </ContainerHeader>
  );
};
