import { StyleLogo } from './style';
import { i18n } from '../../../translate/i18n.js';

export const Logo = () => {
  return <StyleLogo>{`${i18n.t('header.logo')}`}</StyleLogo>;
};
