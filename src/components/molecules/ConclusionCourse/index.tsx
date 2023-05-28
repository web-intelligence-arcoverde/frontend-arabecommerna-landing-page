import { i18n } from '@/translate/i18n.js';
import { DefaultContainer, SectionsContainer } from './style';
import { allSectionsMock } from '@/__mocks__';
import { useRouter } from 'next/router';

export const CourseArabe = () => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  const goToPage = (sectionId) => {
    if (isHome) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/');
      setTimeout(() => {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  };

  return (
    <DefaultContainer>
      <h1>{`${i18n.t('conclusion.course')}`}</h1>
      <SectionsContainer>
        {allSectionsMock.map(
          (item, index) =>
            item.id !== 'price' && (
              <button key={index} onClick={() => goToPage(item.id)}>
                {item.name}
              </button>
            )
        )}
      </SectionsContainer>
    </DefaultContainer>
  );
};
