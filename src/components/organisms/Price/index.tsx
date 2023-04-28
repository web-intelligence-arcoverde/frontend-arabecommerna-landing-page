import { ContainerPrice } from './style';
import { i18n } from '@/translate/i18n.js';

export const Price = () => {
  const textInitComponent = i18n.t('price.text');

  return (
    <ContainerPrice id="price">
      <h1 dangerouslySetInnerHTML={{ __html: textInitComponent }} />

      <div>teste</div>
    </ContainerPrice>
  );
};
