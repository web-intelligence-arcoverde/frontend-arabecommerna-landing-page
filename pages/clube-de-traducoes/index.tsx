import { TrabslationClubMock } from '@/__mocks__';
import { Conclusion, Doubts, Footer, Header } from '@/components';
import { i18n } from '@/translate/i18n.js';
import { PageView } from 'styles';

const TrabslationClub = () => {
  return (
    <PageView suppressHydrationWarning={true}>
      <Header
        currentPage={i18n.t('header.lastPage')}
        lastPage={i18n.t('header.currentPage')}
        howItWorks={TrabslationClubMock}
        currentPageMobile={'Curso de Árabe'}
        nextPageMobile={'Clube de Traduções'}
      />

      <Doubts />
      <Conclusion />
      <Footer />
    </PageView>
  );
};

export default TrabslationClub;
