import { ICONS } from '@/assets';
import { CardSeeMore } from './style';
import Image from 'next/image';
import { i18n } from '@/translate/i18n.js';

export const SeeMore = () => {
  return (
    <CardSeeMore>
      <Image src={ICONS.Mouse} alt="mouse icon" />
      {`${i18n.t('presentation.seeMore')}`}
    </CardSeeMore>
  );
};
