import Image from 'next/image';
import { ResultsContainer, ResultsPresentation } from './style';
import { ICONS } from '@/assets';
import { HeaderSection, CardVideos } from '@/components';
import { i18n } from '@/translate/i18n.js';
import { StyleDesktop } from 'styles';

export const Results = () => {
  return (
    <ResultsContainer id="results">
      <ResultsPresentation>
        <StyleDesktop>
          <Image src={ICONS.Details} />
        </StyleDesktop>

        <HeaderSection
          smallText={`${i18n.t('results.title')}`}
          bigText={`${i18n.t('results.subTitle')}`}
        />
      </ResultsPresentation>
      <CardVideos />
    </ResultsContainer>
  );
};
