import { BREAKPOINTS, COLORS } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const ContainerPlatform = styled.section`
  display: flex;
  padding: 128px 96px;
  gap: 96px;
  border: solid 1px ${COLORS.light._02};
  h6 {
    color: ${COLORS.gray._02};
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 2rem;
    color: ${COLORS.dark._04};
    font-family: 'Raleway';
    span {
      color: ${COLORS.brand._02};
      font-size: 2rem;
      font-family: 'Raleway';
    }

  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 20px;
    width: 100%;

  }
`;

export const Aside = styled.aside`
  max-width: 328px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
`;

export const ItemList = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    height: 48px;
    align-items: center;
    padding-left: 12px;
    gap: 8px;
    cursor: pointer;
    width: 100%;
    color: ${(props) =>
      props.active ? `${COLORS.auxiliary.confirm}` : `${COLORS.gray._04}`};
    background-color: ${(props) => props.active && 'rgba(10, 103, 209, 0.05);'};
    font-weight: ${(props) => (props.active ? 600 : 400)};
    border-radius: ${(props) => (props.active ? '5px' : '')};
  }
  p {
    padding: 20px 9%;
    color: ${COLORS.gray._04};
    border-bottom: solid 1px ${COLORS.light._02};
  }
`;


