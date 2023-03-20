import { ChangeLanguage } from "../src/components";
import { GlobalStyle } from "../styles";
import { i18n } from "../src/translate/i18n.js";

const Home = () => {
  return (
    <main suppressHydrationWarning={true}>
      <ChangeLanguage />
      <div style={{ margin: "100px" }}>{`${i18n.t("presentation.teste")}`}</div>
      <GlobalStyle />
    </main>
  );
};

export default Home;
