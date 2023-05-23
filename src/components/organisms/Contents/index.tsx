import { useState } from 'react';
import { AllModule, CardButtons, Content, FlexHeader } from './styled';
import { modulesMock } from '@/__mocks__';
import { CardModule } from '@/components/molecules';

export const Contents = () => {
  const labelButtonModule = ['Módulo 1 a 4', 'Módulo 5 a 8 ', 'Módulo 9 a 12'];
  const [showModule, setShowModule] = useState(0);

  return (
    <Content id="content">
      <h6>CONTEÚDO</h6>
      <FlexHeader>
        <h1>
          O que você vai <span>aprender</span>
        </h1>
        <CardButtons>
          {labelButtonModule.map((item, index) => (
            <button id={showModule == index ? 'active' : ''} key={index}>
              {item}
            </button>
          ))}
        </CardButtons>
      </FlexHeader>
      <AllModule>
        {modulesMock.map((item) => (
          <CardModule
            key={item.id}
            title={item.title}
            description={item.description}
            button={item.button}
          />
        ))}
      </AllModule>
    </Content>
  );
};
