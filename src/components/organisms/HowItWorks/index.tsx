import Image from 'next/image';
import { HowItWorksContainer, LearnContainer, LearnDetails } from './style';
import { ICONS } from '@/assets';
import { i18n } from '../../../translate/i18n.js';

export const HowItWorks = () => {
  const learnto = i18n.t('howWork.learnto');
  return (
    <HowItWorksContainer>
      <LearnContainer>
        <h1>{`${i18n.t('howWork.Work')}`}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: learnto }}></h2>
        <div>
          <Image src={ICONS.Details} />
        </div>
      </LearnContainer>
      <LearnDetails>
        <Image src={ICONS.Mouses} />
        <div>
          <h1>{`${i18n.t('howWork.Methodology')}`}</h1>
          <p>{`${i18n.t('howWork.adopted')}`}</p>
        </div>
        <Image src={ICONS.Notebook} />
        <div>
          <h1>{`${i18n.t('howWork.liveClasses')}`}</h1>
          <p>{`${i18n.t('howWork.study')}`}</p>
        </div>
        <Image src={ICONS.People} />
        <div>
          <h1>{`${i18n.t('howWork.studentFollow')}`}</h1>
          <p>{`${i18n.t('howWork.withConstant')}`}</p>
        </div>
      </LearnDetails>
    </HowItWorksContainer>
  );
};
