import { ICONS } from '@/assets';
import { CardImage, ContainerFeedback } from './style';
import { i18n } from '@/translate/i18n.js';
import Image from 'next/image';
import { Testimonial } from '@/components/molecules';

export const Feedback = () => {
  const feedback = i18n.t('feedback.subtitle');
  return (
    <ContainerFeedback id="feedback">
      <aside>
        <h4>{`${i18n.t('feedback.title')}`}</h4>
        <h1 dangerouslySetInnerHTML={{ __html: feedback }} />
        <CardImage>
          <Image src={ICONS.Feedback} alt="icone feedback" />
        </CardImage>
      </aside>
      <Testimonial />
    </ContainerFeedback>
  );
};
