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
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const ContentMenuMobile = ({
  buttonName,
  sections,
  nameCurrentSection,
}: ContentMenuMobileProps) => {
  const [showSections, setShowSections] = useState<boolean>(false);

  return (
    <CardContentMenuMobile >
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
          <a href="#"> {nameCurrentSection}</a>
          <Image src={ICONS.Arrow} alt="icone dopdrow" />
        </CurrentSection>
      </CardSections>
      {showSections && (
        <AllSections>
          {sections.map((item) => (
            <li key={item.name}>
              <AnchorLink href={`#${item.id}`} id={nameCurrentSection === item.name ? `active` : ''}>
                {item.name}
              </AnchorLink>
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
