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

export const Doubts = () => {
  return (
    <DoubtsContainer id="questions">
      <Grade>
        <Image src={ICONS.Grade} />
      </Grade>

      <CardCenter>
        <HeaderSection
          lineHeight="none"
          smallText={'RESPONDENDO'}
          bigText={`
          Principais <span>dúvidas</span>
        `}
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
        <Image src={ICONS.Details} />
      </Detail>
    </DoubtsContainer>
  );
};
