import Image from 'next/image';
import { CardContainer, CardContent, CardIcon } from './style';

interface CardInfoProps {
  title: string;
  subTitle: string;
  icon: any;
}

export const MusicCard = ({ icon, title, subTitle }: CardInfoProps) => {
  return (
    <CardContainer>
      <CardIcon>
        <Image src={icon} alt="Icon" />
      </CardIcon>
      <CardContent>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </CardContent>
    </CardContainer>
  );
};
