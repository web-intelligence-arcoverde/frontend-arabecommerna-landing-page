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
import { i18n } from '@/translate/i18n.js';

interface CardPriceProps {
  title: string;
  oldPrice: string;
  currentPrice: string;
  arrayBenefit: string[];
  buttonText: string;
}

export const CardPrice = ({
  title,
  oldPrice,
  currentPrice,
  arrayBenefit,
  buttonText,
}: CardPriceProps) => {
  return (
    <ContainerCard>
      <NextClasses>{title}</NextClasses>
      <OldValue>
        {`${i18n.t('price.card.from')}`} <span>R$ {oldPrice}</span>{' '}
        {`${i18n.t('price.card.per')}`}
      </OldValue>
      <CurrentValue>
        R$ {currentPrice} <span> {`${i18n.t('price.card.amonth')}`} </span>
      </CurrentValue>
      {arrayBenefit.map((benefit, index) => (
        <CardBenefit key={index}>
          <Image src={ICONS.Checked} alt="icone de checked" />
          {benefit}
        </CardBenefit>
      ))}
      <CardButton>
        <Button>{buttonText}</Button>
      </CardButton>
    </ContainerCard>
  );
};
