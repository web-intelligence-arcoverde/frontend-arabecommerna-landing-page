import { BREAKPOINTS } from '@/common';
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
  gap: 56px;

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-flow: wrap;
  }
`;
