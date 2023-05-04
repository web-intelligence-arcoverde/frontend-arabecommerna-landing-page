import { discoveryButtonMock } from '@/__mocks__';
import { ButtonsContainer } from './style';
type ButtonProps = {
  start: any;
};
export const GroupButtons = ({ start }: ButtonProps) => {
  return (
    <ButtonsContainer>
      {discoveryButtonMock.map((textButton, index) => (
        <button onClick={start} key={index}>
          {textButton}
        </button>
      ))}
    </ButtonsContainer>
  );
};
