import React, { useState } from 'react';
import Image from 'next/image';
import {
  Aside,
  ContainerPlatform,
  ItemList,
  ItemListMobile,
  List,
} from './styled';
import { ICONS } from '@/assets';
import { titleShowMock } from '@/__mocks__';
import { StyleDesktop, StyleMobile } from 'styles';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HeaderSection } from '@/components/atoms';
import { i18n } from '@/translate/i18n';

SwiperCore.use([Navigation, Pagination]);

export const Platform = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <ContainerPlatform id="platform">
      <Aside>
        <HeaderSection
          lineHeight="2rem"
          smallText={`${i18n.t('plataform.title')}`}
          bigText={`${i18n.t('plataform.subTitle')}`}
        />

        <List>
          <StyleDesktop>
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
          </StyleDesktop>
          <StyleMobile>
            <Swiper slidesPerView={1} navigation>
              {titleShowMock.map((item, index) => (
                <SwiperSlide key={index}>
                  <ItemListMobile>
                    <li onClick={() => handleItemClick(index)}>
                      <Image src={ICONS.TitlesBlue} alt="icone de titulo" />
                      {item.title}
                    </li>
                    <p>{item.description}</p>
                  </ItemListMobile>
                </SwiperSlide>
              ))}
            </Swiper>
          </StyleMobile>
        </List>
      </Aside>
      <StyleDesktop>
        <Image src={ICONS.ImagePlatform} alt="imagem plataforma" />
      </StyleDesktop>
      <StyleMobile>
        <Image src={ICONS.ImagePlatformMobile} alt="imagem plataforma" />
      </StyleMobile>
    </ContainerPlatform>
  );
};
