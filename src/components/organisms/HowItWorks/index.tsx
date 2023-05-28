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
import { HeaderSection } from '@/components/atoms';

export const HowItWorks = () => {
  const subTitle = i18n.t('howWork.work.subTitle');
  return (
    <HowItWorksContainer id="how-it-works">
      <LearnContainer>
        <HeaderSection smallText={`${i18n.t('howWork.work.title')}`} bigText={subTitle}/>
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
