import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const CardContentMenuMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    position: absolute;
    top: 72px;
    background-color: #0c674685;
    z-index: 10;
    width: 100%;
    justify-content: space-between;
    height: auto;

    button {
      background: ${COLORS.brand._03};
      color: ${COLORS.brand._01};
      font-weight: 500;
      height: 42px;
    }
  }
`;
export const ButtonsControl = styled.div`
  display: flex;
  gap: 20px;
  border-top: solid 1px ${COLORS.light._02};
  border-bottom: solid 1px ${COLORS.light._02};
  padding: 20px;
  background: ${COLORS.light._06};
`;

export const CardSections = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: ${COLORS.light._06};
`;

export const CurrentPageActivated = styled.a`
  font-weight: 600;
  color: ${COLORS.auxiliary.confirm};
  pointer-events: none;
`;

export const CurrentSection = styled.div<{ arrowRotate: string }>`
  display: flex;
  gap: 17px;
  a {
    align-items: center;
    color: ${COLORS.gray._04};
    font-size: 0.9rem;
  }
  img {
    transform: ${(props) =>
      props.arrowRotate ? props.arrowRotate : 'rotate(0deg)'};
  }
`;
export const NextPage = styled.div`
  border-top: solid 1px ${COLORS.light._02};
  padding: 20px;
  background: ${COLORS.light._06};
  a {
    font-weight: 500;
    color: ${COLORS.gray._02};
  }
`;

export const AllSections = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: solid 1px ${COLORS.light._02};
  padding: 20px;
  gap: 32px;
  background: ${COLORS.light._06};
  a {
    font-weight: 500;
    color: ${COLORS.gray._04};
  }
  #active {
    color: ${COLORS.brand._01};
    font-weight: 500;

  }
`;
