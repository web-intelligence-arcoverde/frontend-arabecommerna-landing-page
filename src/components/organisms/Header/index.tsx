import {
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
import { useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { Button, ChangeLanguage, DropdownHeader, Logo } from '@/components';

interface HeaderProps {
  currentPage: string;
  lastPage: string;
  howItWorks: Section[];
}
type Section = {
  name: string;
  id: string;
};

export const Header = ({ currentPage, lastPage, howItWorks }: HeaderProps) => {
  const [section, setSection] = useState(howItWorks[0]);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <ContainerHeader>
      <Navigation>
        <Logo />
        <h1>menu</h1>
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
            <a href="#"> {section.name}</a>
            <Image src={ICONS.Arrow} alt="icone dopdrow" />
          </CurrentNavigation>
          <VerticalLine />
          <LastPage href="/traducoes">{lastPage}</LastPage>
        </ListNav>
      </Navigation>
      <Controls>
        <ChangeLanguage />
        <Button>Whatsapp</Button>
      </Controls>
    </ContainerHeader>
  );
};
