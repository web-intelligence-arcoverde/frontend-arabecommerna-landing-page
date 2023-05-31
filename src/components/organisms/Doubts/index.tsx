import { doubtsCardMocks } from '@/__mocks__';
import {
  CardCenter,
  Detail,
  DoubtContent,
  DoubtsContainer,
  Grade,
} from './style';
import { DoubtsCard } from '@/components/molecules';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { HeaderSection } from '@/components/atoms';
import { i18n } from '@/translate/i18n.js';

export const Doubts = () => {
  return (
    <DoubtsContainer id="questions">
      <Grade>
        <Image src={ICONS.Grade} alt='icon detail'/>
      </Grade>

      <CardCenter>
        <HeaderSection
          lineHeight="none"
          smallText={`${i18n.t('dobouts.title')}`}
          bigText={`${i18n.t('dobouts.subTitle')}`}
        />
      </CardCenter>

      <DoubtContent>
        {doubtsCardMocks.map((item, index) => (
          <li key={index}>
            <DoubtsCard
              id={item.id}
              title={item.doubt}
              subTitle={item.response}
            />
          </li>
        ))}
      </DoubtContent>
      <Detail>
        <Image src={ICONS.Details} alt='icon detail'/>
      </Detail>
    </DoubtsContainer>
  );
};
