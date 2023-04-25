import {
  CardContainer,
  CardImage,
  HowItWorksContainer,
  LearnContainer,
} from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { i18n } from '../../../translate/i18n.js';
import { CardInfo } from '@/components/molecules';
import { cardInfosMock } from '@/__mocks__';

export const HowItWorks = () => {
  const learnto = i18n.t('howWork.learnto');
  return (
    <HowItWorksContainer id='how-it-works'>
      <LearnContainer>
        <h1>{`${i18n.t('howWork.Work')}`}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: learnto }}></h2>
        <CardImage>
          <Image src={ICONS.Details} alt="icone" />
        </CardImage>
      </LearnContainer>
      <CardContainer>
        {cardInfosMock.map((item, index) => (
          <li key={index}>
            <CardInfo
              title={item.title}
              subTitle={item.subTitle}
              icon={item.icon}
            />
          </li>
        ))}
      </CardContainer>
    </HowItWorksContainer>
  );
};
