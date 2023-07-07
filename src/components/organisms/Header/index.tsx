import {
  CardButton,
  ContainerDrop,
  ContainerHeader,
  Controls,
  CurrentNavigation,
  CurrentPageActivated,
  LastPage,
  ListNav,
  Navigation,
  VerticalLine,
} from './style';
import {useState} from 'react';
import Image from 'next/image';
import {ICONS} from '@/assets';
import {
  Button,
  ChangeLanguage,
  ContentMenuMobile,
  DropdownHeader,
  Logo,
} from '@/components';
import {HeaderProps} from '@/types/header';
import {useScrollSection} from '@/hooks/useScrollSection';
import useModalOverflow from '@/hooks/useOverflowModal';

export const Header = ({
  currentPage,
  lastPage,
  howItWorks,
  currentPageMobile,
  nextPageMobile,
}: HeaderProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const buttonName = 'Whatsapp';
  const currentSection = useScrollSection(howItWorks);
  const lastLink = howItWorks[howItWorks.length - 1].name;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  useModalOverflow(menuActive, handleMenu, 'header');

  return (
    <ContainerHeader id='header'>
      <Navigation>
        <Logo />
        <CardButton onClick={handleMenu}>
          <Image src={menuActive ? ICONS.Close : ICONS.Menu} alt='icone menu' />
        </CardButton>
        <ListNav>
          <ContainerDrop>
            <VerticalLine />
            {isHovering && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownHeader
                  nameCurrentSection={currentSection?.name}
                  allSections={howItWorks}
                />
              </div>
            )}
          </ContainerDrop>
          <CurrentPageActivated>{currentPage}</CurrentPageActivated>
          <CurrentNavigation
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href='#'>{!!currentSection ? currentSection?.name : lastLink}</a>
            <Image src={ICONS.Arrow} alt='icone dopdrow' />
          </CurrentNavigation>
          <VerticalLine />
          <LastPage href='/clube-de-traducoes'>{lastPage}</LastPage>
        </ListNav>
      </Navigation>
      <Controls>
        <ChangeLanguage />
        <Button>{buttonName}</Button>
      </Controls>
      {menuActive && (
        <ContentMenuMobile
          nameCurrentSection={
            !!currentSection ? currentSection?.name : lastLink
          }
          buttonName={buttonName}
          sections={howItWorks}
          currentPageMobile={currentPageMobile}
          nextPageMobile={nextPageMobile}
          handleMenu={handleMenu}
        />
      )}
    </ContainerHeader>
  );
};
