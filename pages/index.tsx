import { PageView } from '../styles';
import { allSectionsMock } from '@/__mocks__';
import { i18n } from '../src/translate/i18n.js';
import {
  AboutUs,
  Discovery,
  Feedback,
  Header,
  HowItWorks,
  Presentation,
  Price,
} from '@/components';

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
      <Discovery />
      <Price />
      <Feedback />
    </PageView>
  );
};

export default Home;
/**/
