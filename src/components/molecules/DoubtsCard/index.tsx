import Image from 'next/image';
import { DoubtsContent, DoubtsText } from './style';
import { ICONS } from '@/assets';
import { useEffect, useState } from 'react';

interface DoubtProps {
  id: string;
  title: string;
  subTitle: string;
  showAccordion?: boolean;
}

export const DoubtsCard = ({ id, title, subTitle }: DoubtProps) => {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    function getResize() {
      if (window.innerWidth < 800) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    }
    window.addEventListener('resize', getResize);
    return () => {
      window.removeEventListener('resize', getResize);
    };
  }, []);

  return (
    <DoubtsContent onClick={() => setIsActive(!isActive)}>
      <DoubtsText>
        <h1>
          {id}
          <div>
            <Image src={ICONS.ArrowDown} />
          </div>
        </h1>
        <div>
          <h2>{title}</h2>
          {isActive && subTitle}
        </div>
      </DoubtsText>
    </DoubtsContent>
  );
};
