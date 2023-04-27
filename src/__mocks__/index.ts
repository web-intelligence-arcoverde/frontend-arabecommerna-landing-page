import { ICONS, IMAGES } from '@/assets';
import { i18n } from '../translate/i18n.js';

export const allSectionsMock = [
  {
    name: `${i18n.t('allSections.howItWorks')}`,
    id: 'how-it-works',
    scrollDesktop: 100,
  },
  {
    name: `${i18n.t('allSections.aboutUs')}`,
    id: 'about-us',
  },
  {
    name: `${i18n.t('allSections.explore')}`,
    id: 'explore',
  },
  {
    name: `${i18n.t('allSections.discover')}`,
    id: 'discover',
  },
  {
    name: `${i18n.t('allSections.content')}`,
    id: 'content',
  },
  {
    name: `${i18n.t('allSections.platform')}`,
    id: 'platform',
  },
  {
    name: `${i18n.t('allSections.price')}`,
    id: 'price',
  },
  {
    name: `${i18n.t('allSections.feedback')}`,
    id: 'feedback',
  },
  {
    name: `${i18n.t('allSections.results')}`,
    id: 'results',
  },
  {
    name: `${i18n.t('allSections.questions')}`,
    id: 'questions',
  },
];
export const cardInfosMock = [
  {
    title: `${i18n.t('howWork.methodology.title')}`,
    subTitle: `${i18n.t('howWork.methodology.subTitle')}`,
    icon: ICONS.Mouses,
  },
  {
    title: `${i18n.t('howWork.liveClasses.title')}`,
    subTitle: `${i18n.t('howWork.liveClasses.subTitle')}`,
    icon: ICONS.Notebook,
  },
  {
    title: `${i18n.t('howWork.studentFollow.title')}`,
    subTitle: `${i18n.t('howWork.studentFollow.subTitle')}`,
    icon: ICONS.People,
  },
];

export const testimonialMock = [
  {
    name: 'José Paulo',
    occupation: 'Desenvolvedor Web',
    text: 'Volutpat eget in nullam iaculis nibh. Amet tempus donec convallis tincidunt bibendum commodo pellentesque ut. Ullamcorper fermentum nisi ullamcorper lectus amet lectus integer in. Augue tincidunt blandit sagittis sit. Convallis diam phasellus id vel sem sed sodales sit.',
    perfil: IMAGES.Jose,
  },
  {
    name: 'Bianca Melo',
    occupation: 'Modelo',
    text: 'Volutpat eget in nullam iaculis nibh. Amet tempus donec convallis tincidunt bibendum commodo pellentesque ut. Ullamcorper fermentum nisi ullamcorper lectus amet lectus integer in. Augue tincidunt blandit sagittis sit. Convallis diam phasellus id vel sem sed sodales sit.',
    perfil: IMAGES.Bianca,
  },
];

export const AboutCardConMocks = [
  {
    title: `${i18n.t('aboutUs.material.title')}`,
    subTitle: `${i18n.t('aboutUs.material.subTitle')}`,
    icon: ICONS.Table,
  },
  {
    title: `${i18n.t('aboutUs.certificate.title')}`,
    subTitle: `${i18n.t('aboutUs.certificate.subTitle')}`,
    icon: ICONS.Certificado,
  },
];
