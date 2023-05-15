import { TrabslationClubMock } from '@/__mocks__';
import { TranslationContainer } from './style';
import { i18n } from '@/translate/i18n.js';

export const TranslationClub = () => {
  return (
    <TranslationContainer>
      <h1>{`${i18n.t('conclusion.club')}`}</h1>
      {TrabslationClubMock.map((item, index) => (
        <li key={index}>
          <p>{item.name}</p>
        </li>
      ))}
    </TranslationContainer>
  );
};
