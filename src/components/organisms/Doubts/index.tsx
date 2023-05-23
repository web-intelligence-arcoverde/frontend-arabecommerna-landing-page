import { doubtsCardMocks } from '@/__mocks__';
import {
  Detail,
  DoubtContent,
  DoubtTitle,
  DoubtsContainer,
  Grade,
} from './style';
import { DoubtsCard } from '@/components/molecules';
import Image from 'next/image';
import { ICONS } from '@/assets';

export const Doubts = () => {
  return (
    <DoubtsContainer id="questions">
      <Grade>
        <Image src={ICONS.Grade} />
      </Grade>
      <DoubtTitle>
        <h1>RESPONDENDO</h1>
        <h2>
          Principais <a>dúvidas</a>
        </h2>
      </DoubtTitle>
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
