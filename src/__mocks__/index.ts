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
    scrollMobile: 100,
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

export const benefitPlanMock = [
  `${i18n.t('price.card.benefit.one')}`,
  `${i18n.t('price.card.benefit.two')}`,
  `${i18n.t('price.card.benefit.three')}`,
  `${i18n.t('price.card.benefit.four')}`,
];
export const discoveryButtonMock = [
  `${i18n.t('discovery.buttons.culture')}`,
  `${i18n.t('discovery.buttons.travels')}`,
  `${i18n.t('discovery.buttons.careers')}`,
  `${i18n.t('discovery.buttons.religion')}`,
];

export const discoveryMock = [
  {
    text: `${i18n.t('discovery.text.culture')}`,
    images: [
      IMAGES.CulturaOne,
      IMAGES.CulturaTwo,
      IMAGES.CulturaThree,
      IMAGES.CulturaFour,
    ],
    id: `${i18n.t('discovery.buttons.culture')}`,
  },
  {
    text: `${i18n.t('discovery.text.travels')}`,
    images: [
      IMAGES.ViagemOne,
      IMAGES.ViagemTwo,
      IMAGES.ViagemThree,
      IMAGES.ViagemFour,
    ],
    id: `${i18n.t('discovery.buttons.travels')}`,
  },
  {
    text: `${i18n.t('discovery.text.careers')}`,
    images: [
      IMAGES.CarreiraOne,
      IMAGES.Carreiratwo,
      IMAGES.CarreiraThree,
      IMAGES.CarreiraFour,
    ],
    id: `${i18n.t('discovery.buttons.careers')}`,
  },
  {
    text: `${i18n.t('discovery.text.religion')}`,
    images: [
      IMAGES.ReligiaoOne,
      IMAGES.ReligiaoTwo,
      IMAGES.ReligiaoThree,
      IMAGES.ReligiaoFour,
    ],
    id: `${i18n.t('discovery.buttons.religion')}`,
  },
];

export const doubtsCardMocks = [
  {
    doubt:
      'Sit dictum ullamcorper orci porta ornare a. Enim pellentesque orci amet faucibus at donec arcu. Interdum tellus?',
    response:
      'Blandit et integer aliquam viverra. Elit massa sollicitudin dictum in. Mollis dolor imperdiet faucibus felis est',
    id: '01',
  },
  {
    doubt:
      'Nunc urna tellus elit risus aenean lorem. Rhoncus lorem aliquam eu quis enim. Eu tempor sed sapien nisl purus?',
    response:
      'Dolor vel neque duis vehicula in feugiat. Risus in sit sed amet leo at mi. Lacinia tellus diam lorem adipiscing viverra',
    id: '02',
  },
  {
    doubt:
      'Viverra non felis aliquet amet. Sodales ultrices pretium feugiat phasellus placerat nunc in cursus. Posuere justo congue?',
    response:
      'Lacus amet nibh vestibulum integer arcu dignissim a magna elementum. Ipsum mi sit vestibulum ac a arcu ac elit risus',
    id: '03',
  },
  {
    doubt:
      'Morbi amet adipiscing aenean quis dignissim cras. Quis egestas lorem malesuada in tortor id eget urna massa?',
    response:
      'Fringilla pretium lectus magna suspendisse luctus morbi faucibus. Habitant quis ultrices malesuada sem imperdiet',
    id: '04',
  },
];

export const conclusionClubMock = [
  {
    title: `${i18n.t('conclusion.club')}`,
    text1: `${i18n.t('allSections.howItWorks')}`,
    text2: `${i18n.t('conclusion.music')}`,
    text3: `${i18n.t('allSections.questions')}`,
  },
];
