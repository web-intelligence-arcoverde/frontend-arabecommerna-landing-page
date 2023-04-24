interface HeaderProps {
  currentPage: string;
  lastPage: string;
  howItWorks: Section[];
}
type Section = {
  name: string;
  id: string;
};

interface ContentMenuMobileProps {
  buttonName: string;
  sections: any;
}