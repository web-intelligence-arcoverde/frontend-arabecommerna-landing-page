import { COLORS } from '@/common';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

export const CardDropdown = styled.ul`
  position: absolute;
  background-color: ${COLORS.light._06};
  top: 48px;
  left: 0;
  width: 378px;
  border-top: solid 2px ${COLORS.light._02};
  display: flex;
  flex-direction: column;
  z-index: 2;
  border-radius: 0 0 5px 5px;
  height: 260px;
  flex-wrap: wrap;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 53%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: ${COLORS.light._03};
  }
  li {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    #active {
      color: ${COLORS.brand._01};
      font-weight: 500;
    }

    :hover {
      background-color: ${COLORS.brand._04};
    }
  }
`;

export const Section = styled(AnchorLink)`
  padding-left: 20px;
  color: ${COLORS.gray._03};
  text-transform: capitalize;
`;
