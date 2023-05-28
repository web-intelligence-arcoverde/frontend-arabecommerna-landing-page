import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const DefaultContainer = styled.div`
  h1 {
    padding-bottom: 8px;
    border-bottom: 1px solid #e2f1eb;
  }
`;

export const SectionsContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 16px;
  flex-direction: column;
  height: 100px;
  flex-wrap: wrap;
  width: 450px;
  button {
    background-color: transparent;
    border: none;
    text-align: start;
    color: ${COLORS.gray._02};
    font-weight: 500;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: row;
    width: 100%;
    height: auto;
    button {
      font-size: 0.875rem;
      line-height: 21px;
      text-align: start;
      width: 30%;
    }
  }
`;
