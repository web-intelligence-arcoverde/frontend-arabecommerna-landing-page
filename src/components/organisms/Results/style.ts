import { COLORS } from '@/common';
import styled from 'styled-components';

export const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 128px 96px;
  gap: 56px;
`;

export const ResultsPresentation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultsTitle = styled.div`
  text-align: right;
  h1 {
    color: ${COLORS.gray._02};
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
  }
  h2,
  span {
    color: ${COLORS.dark._04};
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
  }
  span {
    color: ${COLORS.brand._02};
  }
`;
