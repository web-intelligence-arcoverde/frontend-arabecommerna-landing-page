import React, { useState, useRef } from 'react';
import { AllModule, CardButtons, Content, FlexHeader } from './styled';
import { modulesMock } from '@/__mocks__';
import { CardModule } from '@/components/molecules';
import { i18n } from '@/translate/i18n.js';

export const Contents = () => {
  const labelButtonModule = [
    { text: `${i18n.t('content.moduleOne')}`, scrollTo: 0 },
    { text: `${i18n.t('content.moduleTwo')}`, scrollTo: 1246 },
    { text: `${i18n.t('content.modulesThree')}`, scrollTo: 2496 },
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
  const title = i18n.t('content.title');

  return (
    <Content id="content">
      <h6>{`${i18n.t('content.content')}`}</h6>
      <FlexHeader>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
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
            currentModule={item.modules}
          />
        ))}
      </AllModule>
    </Content>
  );
};
