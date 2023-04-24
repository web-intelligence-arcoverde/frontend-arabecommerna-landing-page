interface HeaderProps {
  currentPage: string;
  lastPage: string;
  howItWorks: Section[];
}
type Section = {
  name: string;
  id: string;
};
