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
import {  useState } from 'react';
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
import { useScrollSection } from '@/hooks/useScrollSection';

export const Header = ({ currentPage, lastPage, howItWorks }: HeaderProps) => {

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  
  const buttonName = 'Whatsapp';
  const currentSection = useScrollSection(howItWorks);
  const nameCurrentSection = currentSection.name


  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

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
                <DropdownHeader nameCurrentSection={nameCurrentSection} allSections={howItWorks} />
              </div>
            )}
          </ContainerDrop>
          <CurrentPageActivated>{currentPage}</CurrentPageActivated>
          <CurrentNavigation
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#"> {nameCurrentSection}</a>
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
