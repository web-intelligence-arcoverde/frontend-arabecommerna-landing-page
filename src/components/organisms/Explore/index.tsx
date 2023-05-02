import Image from 'next/image';
import { ContainerExplore, ContainerMap } from './style';
import { ICONS } from '@/assets';
import { CardCountry } from '@/components/molecules';

export const Explore = () => {
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
        <CardCountry />
      </div>
      <ContainerMap>
        <Image src={ICONS.Map} alt="mapa" />
      </ContainerMap>
    </ContainerExplore>
  );
};
