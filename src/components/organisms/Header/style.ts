import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  padding: 0 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 15px 20px;
    height: 72px;
    position: relative;
  }
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
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const CurrentPageActivated = styled.div`
  font-weight: 600;
  color: ${COLORS.auxiliary.confirm};
  margin-right: 16px;
  border-bottom: solid 2px ${COLORS.auxiliary.confirm};
  min-width: 60px;
  text-align: center;
  line-height: 70px;
  z-index: 3;
`;

export const CurrentNavigation = styled.div`
  display: flex;
  gap: 12px;
  line-height: 70px;
  cursor: pointer;
  a {
    color: ${COLORS.gray._03};
    text-transform: capitalize;
  }

  :hover {
    img {
      transform: rotate(180deg);
    }
  }
`;

export const LastPage = styled.a`
  font-weight: 600;
  color: ${COLORS.gray._01};
  font-family: 'IBM Plex Sans', sans-serif;
`;

export const VerticalLine = styled.div`
  width: 2px;
  background-color: ${COLORS.light._02};
  height: 28px;
`;

export const Controls = styled.div`
  display: flex;
  gap: 16px;

  button {
    background: ${COLORS.brand._03};
    color: ${COLORS.brand._01};
    font-weight: 500;
    height: 42px;
  }
  @media (max-width:${BREAKPOINTS.sm}){
    position: absolute;
    bottom: -70px;
    background-color: ${COLORS.light._06};
    z-index: 10;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
  }
`;

export const ContainerDrop = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
