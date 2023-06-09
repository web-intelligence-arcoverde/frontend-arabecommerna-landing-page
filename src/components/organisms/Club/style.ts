import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ClubContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 128px 96px;
  gap: 32px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 96px 20px;
    gap: 56px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    span {
      display: none !important;
    }
  }
`;
export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1248px;
  max-height: 367px;
  background: ${COLORS.light._03};
  border: 1px solid #f6f5fa;
  border-radius: 5px 0px 0px 5px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    max-height: 100%;
  }
`;
