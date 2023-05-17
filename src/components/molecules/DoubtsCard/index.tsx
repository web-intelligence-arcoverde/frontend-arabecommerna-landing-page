import Image from 'next/image';
import { DoubtsContent, DoubtsText } from './style';
import { ICONS } from '@/assets';

interface DoubtProps {
  id: string;
  title: string;
  subTitle: string;
}

export const DoubtsCard = ({ id, title, subTitle }: DoubtProps) => {
  return (
    <DoubtsContent>
      <DoubtsText>
        <h1>
          {id}{' '}
          <div>
            <Image src={ICONS.ArrowDown} />
          </div>
        </h1>
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </DoubtsText>
    </DoubtsContent>
  );
};
