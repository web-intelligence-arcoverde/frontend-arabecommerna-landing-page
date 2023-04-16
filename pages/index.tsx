import { Presentation } from "../src/components";
import { PageView } from "../styles";

const Home = () => {
  return <PageView suppressHydrationWarning={true}>
    <Presentation />
  </PageView>;
};

export default Home;
