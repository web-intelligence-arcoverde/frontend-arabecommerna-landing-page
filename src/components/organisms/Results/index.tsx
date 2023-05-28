import Image from 'next/image';
import { ResultsContainer, ResultsPresentation } from './style';
import { ICONS } from '@/assets';
import { HeaderSection, CardVideos } from '@/components';
import { i18n } from '@/translate/i18n.js';

export const Results = () => {
  return (
    <ResultsContainer id='results'>
      <ResultsPresentation>
        <Image src={ICONS.Details} />
        <HeaderSection
          smallText={`${i18n.t('results.title')}`}
          bigText={`${i18n.t('results.subTitle')}`}
        />
      </ResultsPresentation>
      <CardVideos />
    </ResultsContainer>
  );
};
