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
    scrollDesktop: 130,
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
export const AboutClubMocks = [
  {
    title: `${i18n.t('aboutClub.dicover')}`,
    subTitle: `${i18n.t('aboutClub.discoverSubTitle')}`,
    icon: ICONS.Music,
  },
  {
    title: `${i18n.t('aboutClub.download')}`,
    subTitle: `${i18n.t('aboutClub.downloadSubTitle')}`,
    icon: ICONS.Download,
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
    background: COUNTRYS.BackgroundMarrocos,
  },
  {
    map: COUNTRYS.MapLibia,
    icon: COUNTRYS.IconLibia,
    country: 'Libia',
    capital: 'Capital Trípoli',
    positionX: 51,
    positioY: 30,
    background: COUNTRYS.BackgroundLibia,
  },
  {
    map: COUNTRYS.MapSaara,
    icon: COUNTRYS.IconSaara,
    country: 'Saara Ocidental',
    capital: 'Capital El Aiune',
    positionX: 93,
    positioY: 27,
    background: COUNTRYS.BackgroundSaara,
  },
  {
    map: COUNTRYS.MapMauritania,
    icon: COUNTRYS.IconMauritania,
    country: 'Mauritania',
    capital: 'Capital Nouakchott',
    positionX: 90,
    positioY: 41.5,
    background: COUNTRYS.BackgroundMauritania,
  },
  {
    map: COUNTRYS.MapArgelia,
    icon: COUNTRYS.IconArgelia,
    country: 'Argélia',
    capital: 'Capital Algiers',
    positionX: 71,
    positioY: 24,
    background: COUNTRYS.BackgroundArgelia,
  },
  {
    map: COUNTRYS.MapTunisia,
    icon: COUNTRYS.IconTunisia,
    country: 'Tunísia',
    capital: 'Capital Tunes',
    positionX: 61.5,
    positioY: 11.8,
    background: COUNTRYS.BackgroundTunisia,
  },
  {
    map: COUNTRYS.MapChade,
    icon: COUNTRYS.IconChade,
    country: 'Chade',
    capital: 'Capital Djamena',
    positionX: 50,
    positioY: 61,
    background: COUNTRYS.BackgroundChade,
  },

  {
    map: COUNTRYS.MapArabia,
    icon: COUNTRYS.IconArabia,
    country: 'Arábia Saudita',
    capital: 'Capital Riad',
    positionX: 10.5,
    positioY: 49,
    background: COUNTRYS.BackgroundArabia,
  },
  {
    map: COUNTRYS.MapEgito,
    icon: COUNTRYS.IconEgito,
    country: 'Egito',
    capital: 'Capital Cairo',
    positionX: 34.6,
    positioY: 30,
    background: COUNTRYS.BackgroundEgito,
  },
  {
    map: COUNTRYS.MapSudao,
    icon: COUNTRYS.IconSudao,
    country: 'Sudão',
    capital: 'Capital Cartum',
    positionX: 34.6,
    positioY: 56.5,
    background: COUNTRYS.BackgroundSudao,
  },
  {
    map: COUNTRYS.MapEritreia,
    icon: COUNTRYS.IconEritreia,
    country: 'Eritreia',
    capital: 'Capital Asmara',
    positionX: 20.6,
    positioY: 56.5,
    background: COUNTRYS.BackgroundEritreia,
  },
  {
    map: COUNTRYS.MapSomalia,
    icon: COUNTRYS.IconSomalia,
    country: 'Somalia',
    capital: 'Capital Mogadíscio',
    positionX: 8,
    positioY: 73.5,
    background: COUNTRYS.BackgroundSomalia,
  },
  {
    map: COUNTRYS.MapIemen,
    icon: COUNTRYS.IconIemen,
    country: 'Iêmem',
    capital: 'Capital Sanaã',
    positionX: 10.5,
    positioY: 49.5,
    background: COUNTRYS.BackgroundIemem,
  },
  {
    map: COUNTRYS.MapArabia,
    icon: COUNTRYS.IconArabia,
    country: 'Arábia Saudita',
    capital: 'Capital Riad',
    positionX: 15,
    positioY: 33.5,
    background: COUNTRYS.BackgroundArabia,
  },
  {
    map: COUNTRYS.MapJordania,
    icon: COUNTRYS.IconJordania,
    country: 'Jordânia',
    capital: 'Capital Amã',
    positionX: 27.5,
    positioY: 17.5,
    background: COUNTRYS.BackgroundJordania,
  },
  {
    map: COUNTRYS.MapPalestina,
    icon: COUNTRYS.IconPalestina,
    country: 'Palestina',
    capital: 'Capital Jerusalém',
    positionX: 31.5,
    positioY: 13.5,
    background: COUNTRYS.BackgroundPalestina,
  },
  {
    map: COUNTRYS.MapLibano,
    icon: COUNTRYS.IconLibano,
    country: 'Líbano',
    capital: 'Capital Beirute',
    positionX: 30.5,
    positioY: 7.5,
    background: COUNTRYS.BackgroundLibano,
  },
  {
    map: COUNTRYS.MapSiria,
    icon: COUNTRYS.IconSiria,
    country: 'Síria',
    capital: 'Capital Damasco',
    positionX: 26.5,
    positioY: 3.5,
    background: COUNTRYS.BackgroundSiria,
  },
  {
    map: COUNTRYS.MapIraque,
    icon: COUNTRYS.IconIraque,
    country: 'Iraque',
    capital: 'Capital Bagdá',
    positionX: 19,
    positioY: 7.5,
    background: COUNTRYS.BackgroundIraque,
  },
  {
    map: COUNTRYS.MapKuwait,
    icon: COUNTRYS.IconKuawait,
    country: 'Kuwait',
    capital: 'Capital Kuwait',
    positionX: 12.5,
    positioY: 16.5,
    background: COUNTRYS.BackgroundKuwait,
  },
  {
    map: COUNTRYS.MapBahrein,
    icon: COUNTRYS.IconBahrein,
    country: 'Bahrein',
    capital: 'Capital Manama',
    positionX: 7.5,
    positioY: 21.5,
    background: COUNTRYS.BackgroundBahrein,
  },
  {
    map: COUNTRYS.MapEmiriados,
    icon: COUNTRYS.IconEmiriados,
    country: 'Emirados Árabes Unidos',
    capital: 'Capital Abu Dahbi',
    positionX: 3,
    positioY: 30.5,
    background: COUNTRYS.BackgroundEmirados,
  },
  {
    map: COUNTRYS.MapOma,
    icon: COUNTRYS.IconOma,
    country: 'Omã',
    capital: 'Capital Mascate',
    positionX: 1,
    positioY: 37.5,
    background: COUNTRYS.BackgroundOma,
  },
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

export const TrabslationClubMock = [
  { name: `${i18n.t('allSections.howItWorks')}`, id: 'how-it-works' },
  { name: `${i18n.t('conclusion.music')}`, id: 'music-clube' },
  { name: `${i18n.t('allSections.questions')}`, id: 'questions' },
];

export const modulesMock = [
  {
    id: 1,
    title: `${i18n.t('content.module')} 1`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 2,
    title: `${i18n.t('content.module')} 2`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 3,
    title: `${i18n.t('content.module')} 3`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 4,
    title: `${i18n.t('content.module')} 4`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 5,
    title: `${i18n.t('content.module')} 5`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 6,
    title: `${i18n.t('content.module')} 6`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 7,
    title: `${i18n.t('content.module')} 7`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 8,
    title: `${i18n.t('content.module')} 8`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 9,
    title: `${i18n.t('content.module')} 9`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 10,
    title: `${i18n.t('content.module')} 10`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 11,
    title: `${i18n.t('content.module')} 11`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
  {
    id: 12,
    title: `${i18n.t('content.module')} 12`,
    description: 'Feugiat semper fames sem et viverra urna libero quam',
    modules: [
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
      { name: 'Ornare quam lorem' },
      { name: 'Viverra pharetra sagitis' },
      { name: 'In scelerisque sit hac eget' },
      { name: 'Telluys vitae sed orci nisl ut' },
    ],
  },
];
export const VideosCardMock = [
  {
    src: `https://berro-tech-bucket.s3.sa-east-1.amazonaws.com/upload/Globo+nova+marca++2021.mp4`,
    student: 'Emanoel Costa',
    img: ICONS.Emanuel,
    time: 3,
    id: '1',
  },
  {
    src: `https://berro-tech-bucket.s3.sa-east-1.amazonaws.com/upload/Globo+nova+marca++2021.mp4`,
    student: 'Milena Silva',
    img: ICONS.Milena,
    time: 6,
    id: '2',
  },
  {
    src: `https://berro-tech-bucket.s3.sa-east-1.amazonaws.com/upload/Globo+nova+marca++2021.mp4`,
    student: 'Renato Vieira',
    img: ICONS.Renato,
    time: 9,
    id: '3',
  },
  {
    src: `https://berro-tech-bucket.s3.sa-east-1.amazonaws.com/upload/Globo+nova+marca++2021.mp4`,
    student: 'Sabrina Oliveira',
    img: ICONS.Emanuel,
    time: 12,
    id: '4',
  },
];

export const titleShowMock = [
  {
    title: 'Título da mostragem 1',
    description:
      'Lorem ipsum dolor sit amet egestas consectetura id pretium nisl duits',
  },
  {
    title: 'Título da mostragem 2',
    description:
      'Lorem ipsum dolor sit amet egestas consectetura id pretium nisl duits',
  },
  {
    title: 'Título da mostragem 3',
    description:
      'Lorem ipsum dolor sit amet egestas consectetura id pretium nisl duits',
  },
  {
    title: 'Título da mostragem 4',
    description:
      'Lorem ipsum dolor sit amet egestas consectetura id pretium nisl duits',
  },
];

export const MusicClubMock = [
  {
    icon: ICONS.Table,
    title: `${i18n.t('ClubWork.CardTable.title')}`,
    subTitle: `${i18n.t('ClubWork.CardTable.subTitle')}`,
  },
  {
    icon: ICONS.Survey,
    title: `${i18n.t('ClubWork.CardSurvey.title')}`,
    subTitle: `${i18n.t('ClubWork.CardSurvey.subTitle')}`,
  },
  {
    icon: ICONS.Translation,
    title: `${i18n.t('ClubWork.cardTranslation.title')}`,
    subTitle: `${i18n.t('ClubWork.cardTranslation.subTitle')}`,
  },
];
