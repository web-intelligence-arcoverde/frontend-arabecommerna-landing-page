import { PageView } from '../styles';
import { allSectionsMock } from '@/__mocks__';
import { i18n } from '../src/translate/i18n.js';
import { Header, HowItWorks, Presentation } from '@/components';

const Home = () => {
  return (
    <PageView suppressHydrationWarning={true}>
      <Header
        currentPage={i18n.t('header.currentPage')}
        lastPage={i18n.t('header.lastPage')}
        howItWorks={allSectionsMock}
      />
      <Presentation />
      <HowItWorks />
    </PageView>
  );
};

export default Home;
