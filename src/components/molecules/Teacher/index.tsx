import Image from 'next/image';
import { CardContent, CardIcon, CardImage, TeacherPresentation } from './style';
import { ICONS, IMAGES } from '@/assets';
import { i18n } from '../../../translate/i18n.js';
import { HeaderSection } from '@/components/atoms';

export const Teacher = () => {
  const merna = i18n.t('teacher.subTitle');
  return (
    <TeacherPresentation>
      <CardImage>
        <Image src={IMAGES.Merna} alt='image of teacher'/>
      </CardImage>
      <CardIcon>
        <Image src={ICONS.Grade} alt='icon detail'/>
      </CardIcon>
      <CardContent>
        <HeaderSection
          smallText={`${i18n.t('teacher.title')}`}
          bigText={merna}
        />
        <p>{`${i18n.t('teacher.about')}`}</p>
        <p>{`${i18n.t('teacher.end')}`}</p>
      </CardContent>
    </TeacherPresentation>
  );
};
