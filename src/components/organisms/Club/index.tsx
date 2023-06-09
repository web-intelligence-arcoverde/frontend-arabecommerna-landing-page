import Image from 'next/image';
import { ICONS } from '@/assets';
import { i18n } from '@/translate/i18n.js';
import { HeaderSection } from '@/components/atoms';
import { ClubContainer, PresentationContainer, Title } from './style';
import { MusicClubMock } from '@/__mocks__';
import { MusicCard } from '@/components/molecules';

export const Club = () => {
  return (
    <ClubContainer>
      <Title>
        <HeaderSection
          smallText={`${i18n.t('howWork.work.title')}`}
          bigText={`${i18n.t('ClubWork.subTitle')}`}
        />
        <Image src={ICONS.Grade} alt="Grade icon" />
      </Title>
      <PresentationContainer>
        {MusicClubMock.map((item, index) => (
          <MusicCard
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            icon={item.icon}
          />
        ))}
      </PresentationContainer>
    </ClubContainer>
  );
};
