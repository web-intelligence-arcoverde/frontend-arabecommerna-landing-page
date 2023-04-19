import { Button } from '@/components';
import { PresentationContainer, PresentationDetails, SeeMore } from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { i18n } from '../../../translate/i18n.js';

export const Presentation = () => {
  const become = i18n.t('presentation.become');
  const becomeColor = become.replace(
    'fluente em Árabe',
    '<span>fluente em Árabe</span>'
  );
  console.log(become);
  return (
    <PresentationContainer>
      <PresentationDetails>
        <p>{`${i18n.t('presentation.learn')}`}</p>
        <h2 dangerouslySetInnerHTML={{ __html: becomeColor }}></h2>
        <p>{`${i18n.t('presentation.wheAre')}`}</p>
        <Button>{`${i18n.t('presentation.start')}`}</Button>
        <SeeMore>
          <Image src={ICONS.Mouse} alt="mouse icon" />
          {`${i18n.t('presentation.seeMore')}`}
        </SeeMore>
      </PresentationDetails>
    </PresentationContainer>
  );
};
