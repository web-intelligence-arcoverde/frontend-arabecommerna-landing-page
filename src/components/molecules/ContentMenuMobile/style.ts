import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const CardContentMenuMobile = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    position: absolute;
    top: 72px;
    background-color: ${COLORS.light._06};
    z-index: 10;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    border-top: solid 1px ${COLORS.light._02};
    border-bottom: solid 1px ${COLORS.light._02};
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
`;
