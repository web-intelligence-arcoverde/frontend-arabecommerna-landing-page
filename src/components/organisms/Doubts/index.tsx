import { doubtsCardMocks } from '@/__mocks__';
import { DoboutTitle, DoubtContent, DoubtsContainer } from './style';
import { DoubtsCard } from '@/components/molecules';
export const Doubts = () => {
  return (
    <DoubtsContainer>
      <DoboutTitle>
        <h1>RESPONDENDO</h1>
        <h2>
          Principais <span>dúvidas</span>
        </h2>
      </DoboutTitle>
      <DoubtContent>
        {doubtsCardMocks.map((item, index) => (
          <li key={index}>
            <DoubtsCard
              title={item.doubt}
              subTitle={item.response}
              id={item.id}
            />
          </li>
        ))}
      </DoubtContent>
    </DoubtsContainer>
  );
};
