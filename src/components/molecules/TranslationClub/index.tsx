import { TrabslationClubMock } from '@/__mocks__';
import { CardLinks, TranslationContainer } from './style';
import { i18n } from '@/translate/i18n.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const TranslationClub = () => {
  return (
    <TranslationContainer>
      <h1>{`${i18n.t('conclusion.club')}`}</h1>
      <CardLinks>
        {TrabslationClubMock.map((item, index) => (
          <AnchorLink key={index} href={`#${item.id}`}>
            {item.name}
          </AnchorLink>
        ))}
      </CardLinks>
    </TranslationContainer>
  );
};
