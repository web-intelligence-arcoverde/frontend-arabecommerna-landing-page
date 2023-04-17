import { Logo } from '@/components/atoms/Logo';
import {
  ContainerHeader,
  CurrentNavigation,
  CurrentPageActivated,
  ListNav,
  Navigation,
} from './style';
import { useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { allSectionsMock } from '@/__mocks__';

interface HeaderProps {
  currentPage: string;
}

export const Header = ({ currentPage }: HeaderProps) => {
  const [step, setStep] = useState(allSectionsMock[0]);

  return (
    <ContainerHeader>
      <Navigation>
        <Logo />
        <ListNav>
          <CurrentPageActivated>{currentPage}</CurrentPageActivated>
          <CurrentNavigation>
            {step.name}
            <Image src={ICONS.Arrow} alt="icone dopdrow" />
          </CurrentNavigation>
        </ListNav>
      </Navigation>
    </ContainerHeader>
  );
};
