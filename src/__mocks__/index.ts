import { ICONS, IMAGES, COUNTRYS } from '@/assets';
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

export const MapsMock = [
  {
    map: COUNTRYS.MapMarrocos,
    icon: COUNTRYS.IconMarrocos,
    country: 'Marrocos',
    capital: 'Capital Rabat',
    positionX: 81.5,
    positioY: 11,
  },
  {
    map: COUNTRYS.MapLibia,
    icon: COUNTRYS.IconLibia,
    country: 'Libia',
    capital: 'Capital Trípoli',
    positionX: 51,
    positioY: 30,
  },
  {
    map: COUNTRYS.MapSaara,
    icon: COUNTRYS.IconSaara,
    country: 'Saara Ocidental',
    capital: 'Capital El Aiune',
    positionX: 93,
    positioY: 27,
  },
  {
    map: COUNTRYS.MapMauritania,
    icon: COUNTRYS.IconMauritania,
    country: 'Mauritania',
    capital: 'Capital Nouakchott',
    positionX: 90,
    positioY: 41.5,
  },
  {
    map: COUNTRYS.MapArgelia,
    icon: COUNTRYS.IconArgelia,
    country: 'Argélia',
    capital: 'Capital Algiers',
    positionX: 71,
    positioY: 24,
  },
  {
    map: COUNTRYS.MapTunisia,
    icon: COUNTRYS.IconTunisia,
    country: 'Tunísia',
    capital: 'Capital Tunes',
    positionX: 61.5,
    positioY: 11.8,
  },
  {
    map: COUNTRYS.MapChade,
    icon: COUNTRYS.IconChade,
    country: 'Chade',
    capital: 'Capital Djamena',
    positionX: 50,
    positioY: 61,
  },

  {
    map: COUNTRYS.MapArabia,
    icon: COUNTRYS.IconArabia,
    country: 'Arábia Saudita',
    capital: 'Capital Riad',
    positionX: 10.5,
    positioY: 49,
  },
  {
    map: COUNTRYS.MapEgito,
    icon: COUNTRYS.IconEgito,
    country: 'Egito',
    capital: 'Capital Cairo',
    positionX: 34.6,
    positioY: 30,
  },
  {
    map: COUNTRYS.MapSudao,
    icon: COUNTRYS.IconSudao,
    country: 'Sudão',
    capital: 'Capital Cartum',
    positionX: 34.6,
    positioY: 56.5,
  },
  {
    map: COUNTRYS.MapEritreia,
    icon: COUNTRYS.IconEritreia,
    country: 'Eritreia',
    capital: 'Capital Asmara',
    positionX: 20.6,
    positioY: 56.5,
  },
  {
    map: COUNTRYS.MapSomalia,
    icon: COUNTRYS.IconSomalia,
    country: 'Somalia',
    capital: 'Capital Mogadíscio',
    positionX: 8,
    positioY: 73.5,
  },
  {
    map: COUNTRYS.MapIemen,
    icon: COUNTRYS.IconIemen,
    country: 'Iêmem',
    capital: 'Capital Sanaã',
    positionX: 10.5,
    positioY: 49.5,
  },
  {
    map: COUNTRYS.MapArabia,
    icon: COUNTRYS.IconArabia,
    country: 'Arábia Saudita',
    capital: 'Capital Riad',
    positionX: 15,
    positioY: 33.5,
  },
  {
    map: COUNTRYS.MapJordania,
    icon: COUNTRYS.IconJordania,
    country: 'Jordânia',
    capital: 'Capital Amã',
    positionX: 27.5,
    positioY: 17.5,
  },
  {
    map: COUNTRYS.MapPalestina,
    icon: COUNTRYS.IconPalestina,
    country: 'Palestina',
    capital: 'Capital Jerusalém',
    positionX: 31.5,
    positioY: 13.5,
  },
  {
    map: COUNTRYS.MapLibano,
    icon: COUNTRYS.IconLibano,
    country: 'Líbano',
    capital: 'Capital Beirute',
    positionX: 30.5,
    positioY: 7.5,
  },
  {
    map: COUNTRYS.MapSiria,
    icon: COUNTRYS.IconSiria,
    country: 'Síria',
    capital: 'Capital Damasco',
    positionX: 26.5,
    positioY: 3.5,
  },
  {
    map: COUNTRYS.MapIraque,
    icon: COUNTRYS.IconIraque,
    country: 'Iraque',
    capital: 'Capital Bagdá',
    positionX: 19,
    positioY: 7.5,
  },
  {
    map: COUNTRYS.MapKuwait,
    icon: COUNTRYS.IconKuawait,
    country: 'Kuwait',
    capital: 'Capital Kuwait',
    positionX: 12.5,
    positioY: 16.5,
  },
  {
    map: COUNTRYS.MapBahrein,
    icon: COUNTRYS.IconBahrein,
    country: 'Bahrein',
    capital: 'Capital Manama',
    positionX: 7.5,
    positioY: 21.5,
  },
  {
    map: COUNTRYS.MapEmiriados,
    icon: COUNTRYS.IconEmiriados,
    country: 'Emirados Árabes Unidos',
    capital: 'Capital Abu Dahbi',
    positionX: 3,
    positioY: 30.5,
  },
  {
    map: COUNTRYS.MapOma,
    icon: COUNTRYS.IconOma,
    country: 'Omã',
    capital: 'Capital Mascate',
    positionX: 1,
    positioY: 37.5,
  },
];
