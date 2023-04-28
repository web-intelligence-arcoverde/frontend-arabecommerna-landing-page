import { benefitPlanMock } from '@/__mocks__';
import {
  CardBenefit,
  CardButton,
  ContainerCard,
  CurrentValue,
  NextClasses,
  OldValue,
} from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { Button } from '@/components/atoms';

export const CardPrice = () => {
  return (
    <ContainerCard>
      <NextClasses>PRÓXIMAS TURMAS: 03 / 11</NextClasses>
      <OldValue>
        De <span>R$ 400,00</span> por
      </OldValue>
      <CurrentValue>
        R$ 199,90 <span>por mês</span>
      </CurrentValue>
      {benefitPlanMock.map((benefit, index) => (
        <CardBenefit key={index}>
          <Image src={ICONS.Checked} alt="icone de checked" />
          {benefit}
        </CardBenefit>
      ))}
      <CardButton>
        <Button>Quero começar a aprender</Button>
      </CardButton>
    </ContainerCard>
  );
};
