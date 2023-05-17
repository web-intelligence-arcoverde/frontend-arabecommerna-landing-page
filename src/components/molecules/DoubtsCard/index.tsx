import Image from 'next/image';
import { DoubtsContent, DoubtsText } from './style';
import { ICONS } from '@/assets';

interface DoubtProps {
  id: string;
  title: string;
  subTitle: string;
  showAccordion?: boolean;
}

export const DoubtsCard = ({
  id,
  title,
  subTitle,
  showAccordion,
}: DoubtProps) => {
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
          {showAccordion && subTitle}
        </div>
      </DoubtsText>
    </DoubtsContent>
  );
};
