import Image from 'next/image';
import { DiscoveryContent, DiscoveryTitle, Title } from './style';
import { ICONS } from '@/assets';
import { i18n } from '@/translate/i18n.js';
import { ButtonTab, DiscoveryCard, HeaderSection } from '@/components';
import { discoveryButtonMock, discoveryMock } from '@/__mocks__';
import { useState } from 'react';

export const Discovery = () => {
  const [dataDiscovery, setDataDiscovery] = useState(discoveryMock[0]);
  const [buttonActive, setButtonActive] = useState(
    `${i18n.t('discovery.buttons.culture')}`
  );
  const handleOnClick = ({ target }) => {
    const buttonId = target.innerText;
    setButtonActive(buttonId);
    const filterDiscovery = discoveryMock.find((item) => item.id === buttonId);
    setDataDiscovery(filterDiscovery);
  };
  const subTitle = `${i18n.t('discovery.subTitle')}`;
  return (
    <DiscoveryContent id="discover">
      <DiscoveryTitle>
        <Image src={ICONS.Grade} />
        <HeaderSection
          lineHeight="2rem"
          smallText={`${i18n.t('discovery.title')}`}
          bigText={subTitle}
        />
        <Image src={ICONS.Details} />
      </DiscoveryTitle>
      <ButtonTab
        getButton={handleOnClick}
        defaultActive={buttonActive}
        buttons={discoveryButtonMock}
      />
      <DiscoveryCard
        textContent={dataDiscovery.text}
        images={dataDiscovery.images}
      />
    </DiscoveryContent>
  );
};
