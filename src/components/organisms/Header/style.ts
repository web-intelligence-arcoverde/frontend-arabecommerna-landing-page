import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  padding: 15px 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  a {
    text-transform: capitalize;
  }
`;

export const ListNav = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const CurrentPageActivated = styled.a`
  font-weight: 600;
  color: ${COLORS.auxiliary.confirm};
  /* border-bottom: solid 2px ${COLORS.auxiliary.confirm}; */
`;

export const CurrentNavigation = styled.div`
  display: flex;
  gap: 12px;
  color: ${COLORS.gray._03};
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    img {
      transform: rotate(180deg);
    }
  }
`;
