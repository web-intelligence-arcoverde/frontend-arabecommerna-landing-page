import Image from 'next/image';
import {
  ButtonClick,
  CardBackground,
  ContainerExplore,
  ContainerMap,
  Content,
} from './style';
import { CardCountry } from '@/components/molecules';
import { useState } from 'react';
import { MapsMock } from '@/__mocks__';

export const Explore = () => {
  const [state, setState] = useState(MapsMock[1]);
  console.log(state.background);

  const handleClick = ({ target }) => {
    let getCountry = MapsMock.filter((item) => target.id === item.country);
    setState(getCountry[0]);
    console.log('pegou')
  };
  return (
    <ContainerExplore id="explore">
      <CardBackground>
        <Image  src={state.background} loading='eager' alt="teste" />
      </CardBackground>
      <Content>
        <h1>Explore</h1>
        <CardCountry
          icon={state.icon}
          country={state.country}
          capital={state.capital}
        />
      </Content>
      <ContainerMap>
        <Image src={state.map} alt="mapa" priority={true} />
        {MapsMock.map((item) => (
          <ButtonClick
            onClick={handleClick}
            key={item.country}
            id={item.country}
            positionX={item.positionX}
            positionY={item.positioY}
          />
        ))}
      </ContainerMap>
    </ContainerExplore>
  );
};
