import { ICONS } from '@/assets';
import { CardImage, ContainerFeedback } from './style';
import { i18n } from '@/translate/i18n.js';
import Image from 'next/image';
import { Testimonial } from '@/components/molecules';
import { HeaderSection } from '@/components/atoms';

export const Feedback = () => {
  const feedback = i18n.t('feedback.subtitle');
  return (
    <ContainerFeedback id="feedback">
      <aside>
        <HeaderSection
          smallText={`${i18n.t('feedback.title')}`}
          bigText={feedback}
          lineHeight='none'
        />
        <CardImage>
          <Image src={ICONS.Feedback} alt="icone feedback" />
        </CardImage>
      </aside>
      <Testimonial />
    </ContainerFeedback>
  );
};
