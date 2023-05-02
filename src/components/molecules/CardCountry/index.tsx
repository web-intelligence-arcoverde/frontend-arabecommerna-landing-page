import Image from 'next/image';
import {
  ContainerCountry,
  DescriptionCountry,
  IconCountry,
  InfoCountry,
} from './style';
import { ICONS } from '@/assets';

export const CardCountry = () => {
  return (
    <ContainerCountry>
      <InfoCountry>
        <IconCountry>
          <Image width={32} height={32} src={ICONS.Marrocos} />
        </IconCountry>

        <div>
          <h4>Marrocos</h4>
          <span>Capital Rabat</span>
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
