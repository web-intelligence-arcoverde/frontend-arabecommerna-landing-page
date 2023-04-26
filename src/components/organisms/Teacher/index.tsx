import Image from 'next/image';
import { CardContent, CardIcon, CardImage, TeacherPresentation } from './style';
import { ICONS, IMAGES } from '@/assets';

export const Teacher = () => {
  return (
    <TeacherPresentation>
      <CardImage>
        <Image src={IMAGES.Merna} />
      </CardImage>
      <CardIcon>
        <Image src={ICONS.Grade} />
      </CardIcon>
      <CardContent>
        <h1>COM QUEM VOCÊ VAI APRENDER</h1>
        <h2>
          Olá, eu me chamo <span>Merna</span>
        </h2>
        <p>
          Com quase 10 anos de experiência no ensino do idioma árabe,sua paixão
          pela língua e pela cultura, juntamente com sua vocação pedagógica, a
          incentivaram a criar um curso de árabe para estrangeiros no Cairo, que
          atualmente está ajudando vários alunos de diversas nacionalidades ao
          redor do mundo
        </p>
        <p>
          Ao longo dos anos, optou por uma abordagem de ensino flexível, que se
          adapta às necessidades individuais de cada aluno, focando no
          aprendizado através da conversação
        </p>
      </CardContent>
    </TeacherPresentation>
  );
};
