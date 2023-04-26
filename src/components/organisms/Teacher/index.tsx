import Image from 'next/image';
import { TeacherPresentation } from './style';
import { IMAGES } from '@/assets';

export const Teacher = () => {
  return (
    <TeacherPresentation>
      <Image src={IMAGES.Merna} />
    </TeacherPresentation>
  );
};
