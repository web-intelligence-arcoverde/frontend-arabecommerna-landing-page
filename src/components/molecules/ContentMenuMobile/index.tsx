import { Button, ChangeLanguage } from '@/components/atoms';
import { ButtonsControl, CardContentMenuMobile } from './style';



export const ContentMenuMobile = () => {
  return (
    <CardContentMenuMobile>
      <ButtonsControl>
        <ChangeLanguage />
        <Button>Whatsapp</Button>
      </ButtonsControl>
    </CardContentMenuMobile>
  );
};
