import Image from 'next/image';
import { ResultsContainer, ResultsPresentation, ResultsTitle } from './style';
import { ICONS } from '@/assets';
import { CardVideos } from '@/components/molecules';

export const Results = () => {

  return (
    <ResultsContainer>
      <ResultsPresentation>
        <Image src={ICONS.Details} />
        <ResultsTitle>
          <h1>RESULTADOS</h1>
          <h2>
            Veja os resultados dos <span>nossos alunos</span>
          </h2>
        </ResultsTitle>
      </ResultsPresentation>
      <CardVideos />
    </ResultsContainer>
  );
};
