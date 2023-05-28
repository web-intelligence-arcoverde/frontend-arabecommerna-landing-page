import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ConclusionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 56px 96px 96px;
  gap: 231px;
  background-color: ${COLORS.brand._04};
  border-bottom: 0.01px solid ${COLORS.gray._05};
  h1,
  p {
    color: ${COLORS.gray._01};
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
  }
  p {
    color: ${COLORS.gray._02};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px 32px;
    gap: 48px;
    h1,
    p {
      font-size: 0.875rem;
      line-height: 21px;
    }
    p {
      font-weight: 400;
    }
  }
`;
export const CoursePresentation = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 20px;
  min-width: 326px;
  p {
    padding-left: 28px;
    border-left: 1px solid ${COLORS.auxiliary.blue};
    line-height: 31px;
    color: ${COLORS.gray._01};
  }
`;
export const ConclusionSections = styled.div`
  display: flex;
  gap: 96px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    gap: 32px;
  }
`;
