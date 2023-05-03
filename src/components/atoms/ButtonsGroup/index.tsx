import { discoveryButtonMock } from '@/__mocks__';
import { ButtonsContainer } from './style';

interface buttonProps {
  textButton: string;
}
export const GroupButtons = () => {
  return (
    <ButtonsContainer>
      {discoveryButtonMock.map((textButton, index) => (
        <button key={index}>{textButton}</button>
      ))}
    </ButtonsContainer>
  );
};
