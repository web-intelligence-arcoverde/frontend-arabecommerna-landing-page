import { COLORS } from '@/common';
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
`;

export const Aside = styled.aside`
  min-width: 328px;
`;

export const ListTitle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;

  li {
    display: flex;
    height: 48px;
    color: ${COLORS.gray._04};
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: 100%;
  }
`;
