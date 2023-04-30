export interface HeaderProps {
  currentPage: string;
  lastPage: string;
  howItWorks: Section[];
  currentPageMobile: string;
  nextPageMobile: string;
}
export type Section = {
  scrollMobile?: string | number | (() => number);
  name: string;
  id: string;
};

export interface ContentMenuMobileProps {
  buttonName: string;
  sections: Section[];
  nameCurrentSection: string;
  currentPageMobile: string;
  nextPageMobile: string;
  handleMenu: () => void;
}
