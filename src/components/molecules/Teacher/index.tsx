import Image from 'next/image';
import { CardContent, CardIcon, CardImage, TeacherPresentation } from './style';
import { ICONS, IMAGES } from '@/assets';
import { i18n } from '../../../translate/i18n.js';

export const Teacher = () => {
  const merna = i18n.t('teacher.subTitle');
  return (
    <TeacherPresentation>
      <CardImage>
        <Image src={IMAGES.Merna} />
      </CardImage>
      <CardIcon>
        <Image src={ICONS.Grade} />
      </CardIcon>
      <CardContent>
        <h1>{`${i18n.t('teacher.title')}`}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: merna }}></h2>
        <p>{`${i18n.t('teacher.about')}`}</p>
        <p>{`${i18n.t('teacher.end')}`}</p>
      </CardContent>
    </TeacherPresentation>
  );
};
