import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const TranslationContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #605e70;
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2f1eb;
  }
  h1,
  li {
    width: max-content;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 135px;
    h1 {
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;

export const CardLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  button {
    color: ${COLORS.gray._02};
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
    text-align: start;
    background-color: transparent;
    border: none;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    button {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 21px;
    }
  }
`;
