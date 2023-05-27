import Image from 'next/image';
import { Aside, ContainerPlatform, ListTitle } from './styled';
import { ICONS } from '@/assets';
import { titleShowMock } from '@/__mocks__';

export const Platform = () => {
  return (
    <ContainerPlatform id="platform">
      <Aside>
        <h6>PLATAFORMA</h6>
        <h1>
          Conheça <span>por dentro </span>
        </h1>
        <ListTitle>
          {titleShowMock.map((item, index) => (
            <li key={index}>
              <Image src={ICONS.IconTitle} alt="icone de titulo" />
              {item.title}
            </li>
          ))}
        </ListTitle>
      </Aside>
      <Image src={ICONS.ImagePlatform} alt="imagem plataforma" />
    </ContainerPlatform>
  );
};
