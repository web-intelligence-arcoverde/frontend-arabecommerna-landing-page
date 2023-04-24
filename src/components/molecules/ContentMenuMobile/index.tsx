import { Button, ChangeLanguage } from '@/components/atoms';
import {
  ButtonsControl,
  CardContentMenuMobile,
  CardSections,
  CurrentPageActivated,
  CurrentSection,
  NextPage,
} from './style';
import { useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/assets';

interface ContentMenuMobileProps {
  buttonName: string;
  sections: any;
}

export const ContentMenuMobile = ({
  buttonName,
  sections,
}: ContentMenuMobileProps) => {
  const [section, setSection] = useState(sections[0]);

  return (
    <CardContentMenuMobile>
      <ButtonsControl>
        <ChangeLanguage />
        <Button>{buttonName}</Button>
      </ButtonsControl>
      <CardSections>
        <CurrentPageActivated href="">Curso de árabe</CurrentPageActivated>{' '}
        <CurrentSection>
          <a href="#"> {section.name}</a>
          <Image src={ICONS.Arrow} alt="icone dopdrow" />
        </CurrentSection>
      </CardSections>
      <NextPage>
        <a href="">Clube de Traduções </a>
      </NextPage>
    </CardContentMenuMobile>
  );
};
