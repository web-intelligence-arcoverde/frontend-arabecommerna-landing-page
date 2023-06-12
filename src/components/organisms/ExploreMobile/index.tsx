import Image from 'next/image';
import {
  CardButton,
  CardText,
  Explore,
  ExploreContainer,
  BackgroundImage,
} from './style';
import { MapsMock } from '@/__mocks__';
import { useState } from 'react';
import { CardCountry } from '@/components/molecules';

export const ExploreMobile = () => {
  const [state, setState] = useState(MapsMock[0]);

  const handleClick = ({ target }) => {
    let getCountry = MapsMock.filter((i) => target.id === i.country);
    setState(getCountry[0]);
  };
  return (
    <ExploreContainer>
      <Explore>
        <h1>EXPLORE</h1>
        <CardButton>
          {MapsMock.map((i) => (
            <button onClick={handleClick} key={i.country} id={i.country}>
              <Image src={i.icon} alt="icon" />
            </button>
          ))}
        </CardButton>
      </Explore>
      <CardText>
        <CardCountry
          icon={state.icon}
          country={state.country}
          capital={state.capital}
        />
      <BackgroundImage>
        <Image height={550} width={600} src={state.background} loading="eager" />   
      </BackgroundImage>
      </CardText>
    </ExploreContainer>
  );
};
