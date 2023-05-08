import { useState } from 'react';
import { CardButtonTab, StyledButton } from './style';

interface ButtonTabProps {
  getButton: any;
  buttons: string[];
  defaultActive: string;
}

export const ButtonTab = ({
  getButton,
  buttons,
  defaultActive,
}: ButtonTabProps) => {
  const [active, setActive] = useState(defaultActive);

  const handleOnClick = ({ target }) => {
    setActive(target.innerText);
    getButton({ target });
  };

  return (
    <CardButtonTab>
      {buttons.map((item, index) => (
        <StyledButton
          id={active === item ? 'active' : ''}
          active={active === item}
          onClick={handleOnClick}
          key={index}
        >
          {item}
        </StyledButton>
      ))}
    </CardButtonTab>
  );
};
