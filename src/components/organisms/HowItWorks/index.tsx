import Image from 'next/image';
import { HowItWorksContainer, LearnContainer, LearnDetails } from './style';
import { ICONS } from '@/assets';

export const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <LearnContainer>
        <h1>COMO FUNCIONA</h1>
        <h2>
          Aprenda a <span>ler, escrever e conversar</span> em Árabe com mais
          confiança
        </h2>
        <div>
          <Image src={ICONS.Details} />
        </div>
      </LearnContainer>
      <LearnDetails>
        <Image src={ICONS.Mouses} />
        <div>
          <h1>Metodologia</h1>
          <p>
            Adotamos um modelo de ensino conversacional, junto com a prática
            constante e o uso da língua em situações reais, para garantir um
            aprendizado eficaz e imersivo
          </p>
        </div>
        <Image src={ICONS.Notebook} />
        <div>
          <h1>Aulas ao vivo</h1>
          <p>
            Estudar árabe com uma professora nativa ao vivo traz diversos
            benefícios: você aprimora a pronúncia, melhora a compreensão do
            idioma e ganha confiança para se comunicar
          </p>
        </div>
        <Image src={ICONS.People} />
        <div>
          <h1>Acompanhamento do aluno</h1>
          <p>
            Com a orientação constante da professora, através de feedbacks e
            correções frequentes, o aluno pode aprimorar suas habilidades e
            avançar mais rapidamente
          </p>
        </div>
      </LearnDetails>
    </HowItWorksContainer>
  );
};
