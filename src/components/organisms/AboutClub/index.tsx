import { CardInfo } from '@/components/molecules';
import { i18n } from '@/translate/i18n.js';
import { AboutCard, AboutContainer, AboutContent, AboutImage } from './style';
import { HeaderSection } from '@/components/atoms';
import { AboutClubMocks } from '@/__mocks__';
import { IMAGES } from '@/assets';
import Image from 'next/image';

export const AboutClub = () => {
  const SubTitle = i18n.t('aboutClub.subTitle');
  return (
    <AboutContainer>
      <AboutContent>
        <HeaderSection
          smallText={`${i18n.t('aboutClub.title')}`}
          bigText={SubTitle}
        />
        <p>{`${i18n.t('aboutClub.paragraph')}`}</p>
        <AboutCard>
          {AboutClubMocks.map((item, index) => (
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
        <Image src={IMAGES.MusicImage} alt="image of student" />
      </AboutImage>
    </AboutContainer>
  );
};
