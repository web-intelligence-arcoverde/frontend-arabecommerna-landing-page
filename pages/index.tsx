import { Presentation,Header } from '../src/components';

import { PageView } from '../styles';

const Home = () => {
  return (
    <PageView suppressHydrationWarning={true}>
      <Header currentPage='curso' />
      <Presentation />
    </PageView>
  );
};

export default Home;
