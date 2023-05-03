import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  letter-spacing: 0.02em;
  max-width: 824px;
  max-height: 55px;
  gap: 24px;
  border-bottom: 1px solid rgb(233 235 237);
  button {
    color: ${COLORS.gray._03};
    background-color: transparent;
    padding: 8px 24px;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    width: 104px;
    height: 40px;
  }
  button:hover {
    background: rgba(10, 103, 209, 0.05);
    color: ${COLORS.auxiliary.blue};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    gap: 4px;
    button {
      padding: 0;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;
