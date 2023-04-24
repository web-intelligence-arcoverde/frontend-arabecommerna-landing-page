export interface HeaderProps {
  currentPage: string;
  lastPage: string;
  howItWorks: Section[];
}
export type Section = {
  name: string;
  id: string;
};

export interface ContentMenuMobileProps {
  buttonName: string;
  sections: any;
}