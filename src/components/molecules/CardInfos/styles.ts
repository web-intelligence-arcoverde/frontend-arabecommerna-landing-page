import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const CardInfos = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 24px;
  h1 {
    color: ${COLORS.gray._01};
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 27px;
  }
  p {
    max-width: 516px;
    max-height: 96px;
    color: ${COLORS.gray._02};
    font-weight: 400;
    line-height: 32px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    h1 {
      font-size: 1rem;
      line-height: 24px;
    }
    span {
      width: 56px !important;
      height: 56px !important;
    }
  }
`;

export const CardIcon = styled.div`
  border: solid 1px ${COLORS.light._03};
  padding: 12px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 42px !important;
    height: 42px !important;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    align-self: flex-start;
    span {
      width: 30px !important;
      height: 30px !important;
    }
  }
`;
