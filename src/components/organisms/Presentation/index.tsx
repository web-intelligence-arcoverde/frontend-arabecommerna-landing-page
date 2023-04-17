import { Button } from '@/components';
import { PresentationContainer, PresentationDetails, SeeMore } from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';

export const Presentation = () => {
  return (
    <PresentationContainer>
      <PresentationDetails>
        <p>APRENDIZADO DE IDIOMA</p>
        <h2>
          Torne-se <span>fluente em Árabe</span> de um <br /> modo eficiente e
          descomplicado
        </h2>
        <p>
          Somos a primeira metodologia que garante a fluência no <br /> idioma
          Árabe e te insere de verdade na cultura
        </p>
        <Button>Começar a aprender</Button>
        <SeeMore>
          <Image src={ICONS.Mouse} alt="mouse icon" />
          Arraste para ver mais
        </SeeMore>
      </PresentationDetails>
    </PresentationContainer>
  );
};
