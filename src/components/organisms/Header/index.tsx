import { Logo } from '@/components/atoms/Logo';
import {
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
import { Button, ChangeLanguage } from '@/components';


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

  return (
    <ContainerHeader>
      <Navigation>
        <Logo />
        <ListNav>
          <VerticalLine />
          <CurrentPageActivated>{currentPage}</CurrentPageActivated>
          <CurrentNavigation>
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
