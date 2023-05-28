import { Button, SeeMore } from '@/components';
import { PresentationContainer, PresentationDetails, Title } from './style';
import { i18n } from '../../../translate/i18n.js';

export const Presentation = () => {
  const become = i18n.t('presentation.learn.subTitle');

  return (
    <PresentationContainer id='presentation'>
      <PresentationDetails>
        <Title>{`${i18n.t('presentation.learn.title')}`}</Title>
        <h2 dangerouslySetInnerHTML={{ __html: become }}></h2>
        <p>{`${i18n.t('presentation.wheAre.title')}`}</p>
        <Button>{`${i18n.t('presentation.wheAre.subTitle')}`}</Button>
      </PresentationDetails>
      <SeeMore />
    </PresentationContainer>
  );
};
