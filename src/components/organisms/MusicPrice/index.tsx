import { benefitPlanMock } from '@/__mocks__';
import { CardPrice } from '@/components/molecules';
import { MusicContainer, Information } from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { i18n } from '@/translate/i18n';

export const MusicPrice = () => {
  const subTitle = `${i18n.t('musicPrice.subTitle')}`;

  return (
    <MusicContainer>
      <Information>
        <h1>{`${i18n.t('musicPrice.title')}`}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: subTitle }}></h2>
        <h3>{`${i18n.t('musicPrice.paragraph')}`}</h3>
        <a href="#">
          <Image src={ICONS.Whatsapp} alt="whatsapp icon" />
          {`${i18n.t('musicPrice.whatsapp')}`}
        </a>
      </Information>
      <CardPrice
        title={`${i18n.t('conclusion.club')}`}
        oldPrice={'De R$ 79,90 por'}
        currentPrice={'R$ 49,90'}
        arrayBenefit={benefitPlanMock}
        buttonText={`${i18n.t('musicPrice.button')}`}
      />
    </MusicContainer>
  );
};
