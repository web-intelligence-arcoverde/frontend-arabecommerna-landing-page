import Image from 'next/image';
import { FooterContainer } from './style';
import { ICONS } from '@/assets';

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <FooterContainer>
      <div>
        <p>©{currentYear} Árabe com Merna</p>{' '}
        <p>Todos os direitos reservados</p>{' '}
        <p>
          Design por <span>Brenno Guedes</span>
        </p>
        <p>
          Desenvolvido por{' '}
          <a
            href="https://github.com/web-intelligence-arcoverde/"
            target="_blank"
          >
            Web Intelligence
          </a>
        </p>
      </div>
      <button onClick={goTop}>
        <a href="#header">
          <Image src={ICONS.ArrowTop} />
        </a>
      </button>
    </FooterContainer>
  );
};
