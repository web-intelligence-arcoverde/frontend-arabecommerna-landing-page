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
      <section
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        id="how-it-works"
      >
        <h1>TESTE...</h1>
      </section>
      <section
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        id="music-club"
      >
        <h1>MUSICAS...</h1>
      </section>

      <Doubts />
      <Conclusion />
      <Footer />
    </PageView>
  );
};

export default TrabslationClub;
