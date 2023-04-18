import { Presentation, Header } from '../src/components';
import { PageView } from '../styles';
import { allSectionsMock } from '@/__mocks__';
import { i18n } from '../src/translate/i18n.js';

const Home = () => {
  return (
    <PageView suppressHydrationWarning={true}>
      <Header
        currentPage={i18n.t('header.currentPage')}
        lastPage={i18n.t('header.lastPage')}
        howItWorks={allSectionsMock}
      />
      <Presentation />
    </PageView>
  );
};

export default Home;
