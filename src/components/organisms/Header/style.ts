import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
  padding: 0 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  position: fixed;
  top: 0;
  z-index: 20;
  background-color: ${COLORS.light._06};
  width: 100%;
  max-width: ${BREAKPOINTS.xxg};
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 15px 20px;
    width: 100%;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  a {
    text-transform: capitalize;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    margin-bottom: 15px;
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
  white-space: nowrap;
  a {
    color: ${COLORS.gray._03};
    text-transform: capitalize;
    width: 110px;
    pointer-events: none;
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
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const ContainerDrop = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const CardButton = styled.button`
  display: none;

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: max-content;
    border-radius: 4px;
    border: solid 1px ${COLORS.light._02};
    background-color: ${COLORS.light._06};
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
  }
`;
