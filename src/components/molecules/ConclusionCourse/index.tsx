import { i18n } from '@/translate/i18n.js';
import { DefaultContainer, SectionsContainer } from './style';
import { allSectionsMock } from '@/__mocks__';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const CourseArabe = () => {
  return (
    <DefaultContainer>
      <h1>{`${i18n.t('conclusion.course')}`}</h1>
      <SectionsContainer>
        {allSectionsMock.map(
          (item,index) =>
            item.id !== 'price' && (
              <AnchorLink key={index} href={`#${item.id}`}>{item.name}</AnchorLink>
            )
        )}
      </SectionsContainer>
    </DefaultContainer>
  );
};
