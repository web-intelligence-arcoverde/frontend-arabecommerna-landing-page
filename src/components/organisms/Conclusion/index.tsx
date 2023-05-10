import { Logo } from '@/components/atoms';
import {
  ConclusionContainer,
  ConclusionSections,
  CoursePresentation,
  EndSection,
} from './style';
import { conclusionClubMock } from '@/__mocks__';

export const Conclusion = () => {
  return (
    <ConclusionContainer>
      <CoursePresentation>
        <Logo />
        <p>
          Torne-se fluente em Árabe de <br /> um modo eficiente e descomplicado
        </p>
      </CoursePresentation>
      <ConclusionSections></ConclusionSections>
      <EndSection>
        {conclusionClubMock.map((item, index) => (
          <li key={index}>
            <h1>{item.title}</h1>
            <p>{item.text1}</p>
            <p>{item.text2}</p>
            <p>{item.text3}</p>
          </li>
        ))}
      </EndSection>
    </ConclusionContainer>
  );
};
