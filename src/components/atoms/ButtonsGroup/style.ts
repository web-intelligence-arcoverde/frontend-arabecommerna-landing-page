import { COLORS } from '@/common';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02em;
  gap: 24px;
  max-width: 824px;
  max-height: 144px;
  border-bottom: 1px solid rgb(233 235 237);
  button {
    color: ${COLORS.gray._03};
    background-color: transparent;
    padding: 8px 24px;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  button:hover,
  button:active {
    background: rgba(10, 103, 209, 0.05);
    color: ${COLORS.auxiliary.blue};
  }
`;
