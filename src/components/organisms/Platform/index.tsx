import React, { useState } from 'react';
import Image from 'next/image';
import { Aside, ContainerPlatform, ItemList, List } from './styled';
import { ICONS } from '@/assets';
import { titleShowMock } from '@/__mocks__';
import { StyleDesktop, StyleMobile } from 'styles';

export const Platform = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <ContainerPlatform id="platform">
      <Aside>
        <h6>PLATAFORMA</h6>
        <h1>
          Conheça <span>por dentro </span>
        </h1>
        <List>
          {titleShowMock.map((item, index) => (
            <ItemList active={selectedItemIndex === index} key={index}>
              <li onClick={() => handleItemClick(index)}>
                <Image
                  src={
                    selectedItemIndex === index
                      ? ICONS.TitlesBlue
                      : ICONS.Titles
                  }
                  alt="icone de titulo"
                />
                {item.title}
              </li>
              {selectedItemIndex === index && <p>{item.description}</p>}
            </ItemList>
          ))}
        </List>
      </Aside>
      <StyleDesktop>
        <Image
          id="platform-desktop"
          src={ICONS.ImagePlatform}
          alt="imagem plataforma"
        />
      </StyleDesktop>
      <StyleMobile>
        <Image
          id="platform-mobile"
          src={ICONS.ImagePlatformMobile}
          alt="imagem plataforma"
        />
      </StyleMobile>
    </ContainerPlatform>
  );
};
