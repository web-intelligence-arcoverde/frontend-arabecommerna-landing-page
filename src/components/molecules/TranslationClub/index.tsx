import { TrabslationClubMock } from '@/__mocks__';
import { CardLinks, TranslationContainer } from './style';
import { i18n } from '@/translate/i18n.js';
import { useRouter } from 'next/router';

export const TranslationClub = () => {
  const router = useRouter();
  const isClub = router.asPath === 'clube-de-traducoes';

  const goToPage = (sectionId) => {
    if (isClub) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/clube-de-traducoes');
      setTimeout(() => {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  };
  return (
    <TranslationContainer>
      <h1>{`${i18n.t('conclusion.club')}`}</h1>
      <CardLinks>
        {TrabslationClubMock.map((item, index) => (
          <button
            onClick={() => {
              goToPage(item.id);
            }}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </CardLinks>
    </TranslationContainer>
  );
};
