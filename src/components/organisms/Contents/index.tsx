import React, { useState, useRef } from 'react';
import { AllModule, CardButtons, Content, FlexHeader } from './styled';
import { modulesMock } from '@/__mocks__';
import { CardModule } from '@/components/molecules';

export const Contents = () => {
  const labelButtonModule = [
    { text: 'Módulo 1 a 4', scrollTo: 0 },
    { text: 'Módulo 5 a 8', scrollTo: 1246 },
    { text: 'Módulo 9 a 12', scrollTo: 2496 },
  ];
  const [showModule, setShowModule] = useState(0);
  const allModuleRef = useRef(null);

  const handleButtonClick = (index) => {
    setShowModule(index);

    const scrollPosition = labelButtonModule[index].scrollTo;
    allModuleRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <Content id="content">
      <h6>CONTEÚDO</h6>
      <FlexHeader>
        <h1>
          O que você vai <span>aprender</span>
        </h1>
        <CardButtons>
          {labelButtonModule.map((item, index) => (
            <button
              id={showModule === index ? 'active' : ''}
              onClick={() => handleButtonClick(index)}
              key={index}
            >
              {item.text}
            </button>
          ))}
        </CardButtons>
      </FlexHeader>
      <AllModule ref={allModuleRef}>
        {modulesMock.map((item, index) => (
          <CardModule
            key={index}
            title={item.title}
            description={item.description}
            button={item.button}
          />
        ))}
      </AllModule>
    </Content>
  );
};
