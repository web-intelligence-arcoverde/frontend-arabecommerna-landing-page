import { CardPrice } from '@/components/molecules';
import { ContainerPrice } from './style';
import { i18n } from '@/translate/i18n.js';
import { benefitPlanMock } from '@/__mocks__';

export const Price = () => {
  const textInitComponent = i18n.t('price.text');

  return (
    <ContainerPrice id="price">
      <p dangerouslySetInnerHTML={{ __html: textInitComponent }} />
      <CardPrice
        title={`${i18n.t('price.card.text')}: 03 / 11 `}
        oldPrice={'400,00'}
        currentPrice={'199,90'}
        arrayBenefit={benefitPlanMock}
        buttonText={`${i18n.t('price.card.button')}`}
      />
    </ContainerPrice>
  );
};
