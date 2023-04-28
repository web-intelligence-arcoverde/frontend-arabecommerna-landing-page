import { CardPrice } from '@/components/molecules';
import { ContainerPrice } from './style';
import { i18n } from '@/translate/i18n.js';

export const Price = () => {
  const textInitComponent = i18n.t('price.text');

  return (
    <ContainerPrice id="price">
      <p dangerouslySetInnerHTML={{ __html: textInitComponent }} />
      <CardPrice />
    </ContainerPrice>
  );
};
