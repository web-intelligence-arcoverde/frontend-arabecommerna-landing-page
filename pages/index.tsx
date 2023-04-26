import { PageView } from '../styles';
import { allSectionsMock } from '@/__mocks__';
import { i18n } from '../src/translate/i18n.js';
import { Header, HowItWorks, Presentation, Teacher } from '@/components';

const Home = () => {
  return (
    <PageView suppressHydrationWarning={true}>

      <Presentation />
      <HowItWorks />
      <Teacher />
    </PageView>
  );
};

export default Home;
      /*<Header
        currentPage={i18n.t('header.currentPage')}
        lastPage={i18n.t('header.lastPage')}
        howItWorks={allSectionsMock}
      />*/