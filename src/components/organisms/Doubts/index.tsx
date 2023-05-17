import { doubtsCardMocks } from '@/__mocks__';
import {
  Detail,
  DoubtContent,
  DoubtTitle,
  DoubtsContainer,
  Grade,
} from './style';
import { DoubtsCard } from '@/components/molecules';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { useEffect, useState } from 'react';
export const Doubts = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [state, setState] = useState([]);
  const toggleAccordion = (e) => {
    console.log(e.showAccordion);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function getResize() {
      if (window.innerWidth < 800) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    window.addEventListener('resize', getResize);
    return () => {
      window.removeEventListener('resize', getResize);
    };
  }, []);

  return (
    <DoubtsContainer id="questions">
      <Grade>
        <Image src={ICONS.Grade} />
      </Grade>
      <DoubtTitle>
        <h1>RESPONDENDO</h1>
        <h2>
          Principais <a>dúvidas</a>
        </h2>
      </DoubtTitle>
      <DoubtContent>
        {doubtsCardMocks.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              toggleAccordion(item);
            }}
          >
            <DoubtsCard
              id={item.id}
              title={item.doubt}
              subTitle={isOpen && item.response}
              showAccordion={item.showAccordion}
            />
          </li>
        ))}
      </DoubtContent>
      <Detail>
        <Image src={ICONS.Details} />
      </Detail>
    </DoubtsContainer>
  );
};
