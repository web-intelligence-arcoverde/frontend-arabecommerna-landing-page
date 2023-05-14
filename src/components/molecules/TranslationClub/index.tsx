import { conclusionClubMock } from "@/__mocks__";
import { TranslationContainer } from "./style";

export const TranslationClub = () => {
  return (
    <TranslationContainer>
      {conclusionClubMock.map((item, index) => (
        <li key={index}>
          <h1>{item.title}</h1>
          <p>{item.text1}</p>
          <p>{item.text2}</p>
          <p>{item.text3}</p>
        </li>
      ))}
    </TranslationContainer>
  );
};
