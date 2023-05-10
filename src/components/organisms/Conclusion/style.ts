import { COLORS } from '@/common';
import styled from 'styled-components';

export const ConclusionContainer = styled.section`
  display: flex;
  align-items: flex-start;
  padding: 56px 96px 96px;
  gap: 56px;
  background-color: ${COLORS.brand._04};
  border-bottom: 0.01px solid ${COLORS.gray._05};
  letter-spacing: 0.02em;
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
`;
export const CoursePresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  min-width: 326px;
  p {
    max-width: 270px;
    padding: 8px 28px;
    border-left: 1px solid ${COLORS.auxiliary.blue};
    font-size: 1rem;
    line-height: 32px;
    color: ${COLORS.gray._01};
  }
`;
export const ConclusionSections = styled.div`
  display: flex;
`;

export const EndSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    padding-bottom: 8px;
    border-bottom: 1px solid #e2f1eb;
  }
`;
