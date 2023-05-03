import Image from 'next/image';
import { ButtonClick, ContainerExplore, ContainerMap } from './style';
import { CardCountry } from '@/components/molecules';
import { useState } from 'react';
import { MapsMock } from '@/__mocks__';

export const Explore = () => {
  const [state, setState] = useState(MapsMock[1]);
  const handleClick = (e: any) => {
    console.log(e.target.id);
  };
  return (
    <ContainerExplore id="explore">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <h1>Explore</h1>
        <CardCountry
          icon={state.icon}
          country={state.country}
          capital={state.capital}
        />
      </div>
      <ContainerMap>
        <Image src={state.map} alt="mapa" />
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
