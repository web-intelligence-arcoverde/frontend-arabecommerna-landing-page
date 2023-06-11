import Image from 'next/image';
import { CardButton, CardText, Explore, ExploreContainer } from './style';
import { MapsMock } from '@/__mocks__';
import { useState } from 'react';
import { CardCountry } from '@/components/molecules';

interface ExploreProps {
  teste?: any;
}
export const ExploreMobile = ({ teste }: ExploreProps) => {
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
      <CardText image={state.background}>
        <CardCountry
          icon={state.icon}
          country={state.country}
          capital={state.capital}
        />
      </CardText>
    </ExploreContainer>
  );
};
