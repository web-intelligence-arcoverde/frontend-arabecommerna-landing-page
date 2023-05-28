import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 128px 96px;
  gap: 56px;
  text-align: right;
  border-top: solid 1px ${COLORS.light._02};
  border-bottom: solid 1px ${COLORS.light._02};

  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 96px 20px;
    overflow-x: auto;
    ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.brand._02};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.brand._04};
    border-radius: 4px;
  }
  }
`;

export const ResultsPresentation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
