import { Button, ChangeLanguage } from '@/components/atoms';
import {
  AllSections,
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
import { ContentMenuMobileProps } from '@/types/header';

export const ContentMenuMobile = ({
  buttonName,
  sections,
}: ContentMenuMobileProps) => {
  const [section, setSection] = useState(sections[0]);
  const [showSections, setShowSections] = useState<boolean>(false);

  return (
    <CardContentMenuMobile>
      <ButtonsControl>
        <ChangeLanguage />
        <Button>{buttonName}</Button>
      </ButtonsControl>
      <CardSections>
        <CurrentPageActivated href="">Curso de árabe</CurrentPageActivated>
        <CurrentSection
          arrowRotate={showSections && 'rotate(180deg)'}
          onClick={() => {
            setShowSections(!showSections);
          }}
        >
          <a href="#"> {section.name}</a>
          <Image src={ICONS.Arrow} alt="icone dopdrow" />
        </CurrentSection>
      </CardSections>
      {showSections && (
        <AllSections>
          {sections.map((item) => (
            <li key={item.name}>
              <a>{item.name}</a>
            </li>
          ))}
        </AllSections>
      )}
      <NextPage>
        <a href="">Clube de Traduções </a>
      </NextPage>
    </CardContentMenuMobile>
  );
};
