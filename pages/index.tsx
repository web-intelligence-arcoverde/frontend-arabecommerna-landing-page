import {PageView} from '../styles';
import {allSectionsMock} from '@/__mocks__';
import {i18n} from '../src/translate/i18n.js';
import {
  AboutUs,
  Explore,
  Conclusion,
  Discovery,
  Doubts,
  Feedback,
  Footer,
  Header,
  HowItWorks,
  Platform,
  Presentation,
  Price,
  Results,
  ExploreMobile,
} from '@/components';
import {Contents} from '@/components/organisms/Contents';

const Home = () => {
  return (
    <PageView suppressHydrationWarning={true}>
      <Header
        currentPage={i18n.t('header.currentPage')}
        lastPage={i18n.t('header.lastPage')}
        howItWorks={allSectionsMock}
        currentPageMobile={'Curso de Árabe'}
        nextPageMobile={'Clube de Traduções'}
      />
      <Presentation />
      <HowItWorks />
      <AboutUs />
      <ExploreMobile />
      <Discovery />
      <Contents />
      <Platform />
      <Price />
      <Feedback />
      <Results />
      <Doubts />
      <Conclusion />
      <Footer />
    </PageView>
  );
};

export default Home;
