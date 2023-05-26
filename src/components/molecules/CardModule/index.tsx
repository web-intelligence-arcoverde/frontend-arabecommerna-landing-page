import Image from 'next/image';
import {
  CardIcon,
  ContainerModule,
  ContentModule,
  DescriptionModule,
  HeaderCard,
  ListCurrentModule,
} from './styled';
import { ICONS } from '@/assets';
import { useState } from 'react';
import { i18n } from '@/translate/i18n.js';

export const CardModule = ({ title, description, currentModule }) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleClick = () => {
    setShowContent(!showContent);
  };
  return (
    <ContainerModule>
      <CardIcon>
        <Image src={ICONS.Module} alt="icone card" />
      </CardIcon>
      <DescriptionModule>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => handleClick()}>{`${i18n.t('content.viewMore')}`}</button>
      </DescriptionModule>
      {showContent && (
        <ContentModule>
          <HeaderCard>
            <h4>Conteúdo do módulo</h4>
            <Image
              onClick={() => setShowContent(!showContent)}
              src={ICONS.Close}
              alt="icon close"
            />
          </HeaderCard>
          <ListCurrentModule>
            {currentModule.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ListCurrentModule>
        </ContentModule>
      )}
    </ContainerModule>
  );
};
