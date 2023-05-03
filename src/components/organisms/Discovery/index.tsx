import Image from 'next/image';
import { DiscoveryContent, DiscoveryImages, DiscoveryTitle } from './style';
import { ICONS } from '@/assets';
import { GroupButtons } from '@/components/atoms/ButtonsGroup';
import { discoveryCultureMock } from '@/__mocks__';
import { i18n } from '@/translate/i18n.js';

export const Discovery = () => {
  const subTitle = `${i18n.t('discovery.subTitle')}`;
  return (
    <DiscoveryContent>
      <DiscoveryTitle>
        <Image src={ICONS.Grade} />
        <h1>{`${i18n.t('discovery.title')}`}</h1>
        <Image src={ICONS.Details} />
      </DiscoveryTitle>
      <h2 dangerouslySetInnerHTML={{ __html: subTitle }}></h2>
      <GroupButtons />
      <p>{`${i18n.t('discovery.text')}`}</p>
      <DiscoveryImages>
        {discoveryCultureMock.map((imgPresentation, index) => (
          <Image key={index} src={imgPresentation} />
        ))}
      </DiscoveryImages>
    </DiscoveryContent>
  );
};
