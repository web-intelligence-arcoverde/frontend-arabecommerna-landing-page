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
  a{
    color: ${COLORS.gray._01};
    font-weight: 500;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: row;
    width: 100%;
    height: auto;
    a{
      text-align: start;
      width: 30%;
    }
  }
`;
