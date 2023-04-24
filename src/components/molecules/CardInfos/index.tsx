import { CardInfos } from './styles';
import Image from 'next/image';
interface CardInfoProps {
  title: string;
  subTitle: string;
  icon: any;
}

export const CardInfo = ({ title, subTitle, icon }: CardInfoProps) => {
  return (
    <CardInfos>
      <Image src={icon} alt="icone" />
      <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </CardInfos>
  );
};
