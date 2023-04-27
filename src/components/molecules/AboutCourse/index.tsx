import Image from 'next/image';
import { AboutCard, AboutContainer, AboutContent, AboutImage } from './style';
import { IMAGES } from '@/assets';
import { CardInfo } from '../CardInfos';
import { AboutCardConMocks, cardInfosMock } from '@/__mocks__';
import { i18n } from '../../../translate/i18n.js';

export const Course = () => {
  const courseSubTitle = i18n.t('aboutUs.course.subTitle');
  return (
    <AboutContainer>
      <AboutContent>
        <h1>{`${i18n.t('aboutUs.course.title')}`}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: courseSubTitle }}></h2>
        <p>{`${i18n.t('aboutUs.course.about')}`}</p>
        <AboutCard>
          {AboutCardConMocks.map((item, index) => (
            <li key={index}>
              <CardInfo
                title={item.title}
                subTitle={item.subTitle}
                icon={item.icon}
              />
            </li>
          ))}
        </AboutCard>
      </AboutContent>
      <AboutImage>
        <Image src={IMAGES.Student} />
      </AboutImage>
    </AboutContainer>
  );
};
