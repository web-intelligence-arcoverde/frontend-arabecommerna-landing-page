import { i18n } from '@/translate/i18n.js';
import { DefaultContainer, SectionsContainer } from './style';

export const CourseArabe = () => {
  return (
    <DefaultContainer>
      <h1>{`${i18n.t('conclusion.course')}`}</h1>
      <SectionsContainer>
        <div>
          <p>{`${i18n.t('allSections.howItWorks')}`}</p>
          <p>{`${i18n.t('allSections.aboutUs')}`}</p>
          <p>{`${i18n.t('allSections.explore')}`}</p>
        </div>
        <div>
          <p>{`${i18n.t('allSections.discover')}`}</p>
          <p>{`${i18n.t('allSections.content')}`}</p>
          <p>{`${i18n.t('allSections.platform')}`}</p>
        </div>
        <div>
          <p>{`${i18n.t('allSections.feedback')}`}</p>
          <p>{`${i18n.t('allSections.results')}`}</p>
          <p>{`${i18n.t('allSections.questions')}`}</p>
        </div>
      </SectionsContainer>
    </DefaultContainer>
  );
};
