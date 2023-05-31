import Image from 'next/image';
import {
  ContainerCountry,
  DescriptionCountry,
  IconCountry,
  InfoCountry,
} from './style';

interface CardCountryProps {
  icon: any;
  country: string;
  capital: string;
}

export const CardCountry = ({ icon, country, capital }: CardCountryProps) => {
  return (
    <ContainerCountry>
      <InfoCountry>
        <IconCountry>
          <Image width={32} height={32} src={icon} alt='any icon'/>
        </IconCountry>
        <div>
          <h4>{country}</h4>
          <span>{capital}</span>
        </div>
      </InfoCountry>
      <DescriptionCountry>
        dTristique ultricies feugiat interdum nam sit aliquet purus. Duis at
        facilisis aliquam tellus posuere fermentum penatibus. Ipsum est nunc
        aliquet at mi id tempor mollis. Vitae amet vulputate id tempor mollis.
        Vitae amet vulputate id tempor mollises
      </DescriptionCountry>
    </ContainerCountry>
  );
};
