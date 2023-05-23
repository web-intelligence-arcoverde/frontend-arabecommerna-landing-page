import Image from 'next/image';
import { CardIcon, ContainerModule, DescriptionModule } from './styled';
import { ICONS } from '@/assets';

export const CardModule = ({ title, description, button }) => {
  return (
    <ContainerModule>
      <CardIcon>
        <Image src={ICONS.Module} alt="icone card" />
      </CardIcon>
      <DescriptionModule>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{button}</button>
      </DescriptionModule>
    </ContainerModule>
  );
};
