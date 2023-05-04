import { CardButtonTab, StyledButton } from './style';

interface ButtonTabProps {
  getButton: any;
  buttons: any[];
  isActive: string;
}

export const ButtonTab = ({ getButton, buttons, isActive }: ButtonTabProps) => {
  return (
    <CardButtonTab>
      {buttons.map((item, index) => (
        <StyledButton
          active={isActive === item}
          onClick={getButton}
          key={index}
        >
          {item}
        </StyledButton>
      ))}
    </CardButtonTab>
  );
};
