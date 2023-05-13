import { Logo } from '@/components/atoms';
import {
  ConclusionContainer,
  ConclusionSections,
  CoursePresentation,
} from './style';
import { CourseArabe, TranslationClub } from '@/components/molecules';
import { i18n } from '@/translate/i18n.js';

export const Conclusion = () => {
  const title = i18n.t('conclusion.title');
  return (
    <ConclusionContainer>
      <CoursePresentation>
        <Logo />
        <p dangerouslySetInnerHTML={{ __html: title }}></p>
      </CoursePresentation>
      <ConclusionSections>
        <CourseArabe />
        <TranslationClub />
      </ConclusionSections>
    </ConclusionContainer>
  );
};
