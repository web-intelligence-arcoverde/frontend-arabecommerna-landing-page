import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const DoubtsContent = styled.div`
  align-items: center;
  font-style: normal;
  font-size: 1rem;
  line-height: 24px;
  max-width: 1036px;
  max-height: 496px;
  h1,
  h2 {
    font-weight: 400;
    color: ${COLORS.gray._04};
  }
  h2,
  p {
    width: 920px;
    height: 24px;
  }
  h1 {
    div {
      display: none;
    }
    max-width: 20px;
    max-height: 24px;
  }
  p {
    margin-top: 12px;
    font-weight: 500;
    color: ${COLORS.gray._02};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    h1,
    h2,
    p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 28px;
      width: auto;
      height: auto;
    }
  }
`;
export const DoubtsText = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    h1 {
      display: flex;
      justify-content: space-between;
      max-width: 100%;
      div {
        display: block;
      }
    }
  }
`;
