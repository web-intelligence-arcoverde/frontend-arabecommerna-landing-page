import { BREAKPOINTS } from '@/common';
import styled from 'styled-components';

export const TranslationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    padding-bottom: 8px;
    border-bottom: 1px solid #e2f1eb;
  }
  p {
    margin-top: 8px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 135px;
  }
`;
