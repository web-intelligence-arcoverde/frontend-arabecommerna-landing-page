import Image from 'next/image';
import { FooterContainer } from './style';
import { ICONS } from '@/assets';
import Link from 'next/link';
import { i18n } from '@/translate/i18n';

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
        <p>
          ©{currentYear} {`${i18n.t('header.logo')}`}
        </p>
        <p>{`${i18n.t('footer.right')}`}</p>{' '}
        <p>
          {`${i18n.t('footer.desing')}`} <span>Brenno Guedes</span>
        </p>
        <p>
          {`${i18n.t('footer.developed')}`}{' '}
          <Link
            href="https://github.com/web-intelligence-arcoverde/"
            target="_blank"
            rel="noreferrer"
          >
            Web Intelligence
          </Link>
        </p>
      </div>
      <button onClick={goTop}>
        <Link href="#header">
          <Image src={ICONS.ArrowTop} alt='arrow top'/>
        </Link>
      </button>
    </FooterContainer>
  );
};
