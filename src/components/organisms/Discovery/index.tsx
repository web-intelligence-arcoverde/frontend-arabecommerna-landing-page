import Image from 'next/image';
import { DiscoveryContent, DiscoveryTitle, Title } from './style';
import { ICONS } from '@/assets';
import { GroupButtons } from '@/components/atoms/ButtonsGroup';
import { i18n } from '@/translate/i18n.js';
import { DiscoveryCard } from '@/components/molecules';
import { discoveryMock } from '@/__mocks__';
import { useState } from 'react';

export const Discovery = () => {
  const [state, setState] = useState(discoveryMock[0]);
  const [valor, setValor] = useState('Cultura');
  const handelOnClick = (e) => {
    setValor(e.target.innerText);
    let teste = discoveryMock.filter((item) => valor === item.id);
    setState(teste[0]);
  };
  const subTitle = `${i18n.t('discovery.subTitle')}`;
  return (
    <DiscoveryContent id="discover">
      <DiscoveryTitle>
        <Image src={ICONS.Grade} />
        <Title>
          <h1>{`${i18n.t('discovery.title')}`}</h1>
          <h2 dangerouslySetInnerHTML={{ __html: subTitle }}></h2>
        </Title>
        <Image src={ICONS.Details} />
      </DiscoveryTitle>
      <GroupButtons start={handelOnClick} />
      <DiscoveryCard textContent={state.text} images={state.images} />
    </DiscoveryContent>
  );
};
