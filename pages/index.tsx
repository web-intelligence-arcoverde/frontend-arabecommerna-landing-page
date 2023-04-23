import { Presentation, Header, HowItWorks } from '../src/components';
import { PageView } from '../styles';
import { allSectionsMock } from '@/__mocks__';
import { i18n } from '../src/translate/i18n.js';

const Home = () => {
  return (
    <PageView suppressHydrationWarning={true}>
      <Presentation />
      <HowItWorks />
    </PageView>
  );
};

export default Home;
/*      <Header
currentPage={i18n.t('header.currentPage')}
lastPage={i18n.t('header.lastPage')}
howItWorks={allSectionsMock}
/>*/