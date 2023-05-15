import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const TranslationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    padding-bottom: 10px;
    border-bottom: 1px solid #e2f1eb;
  }

  h1,
  li {
    width: max-content;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 135px;
  }
`;

export const CardLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: ${COLORS.gray._01};
    font-weight: 500;
  }
`;
