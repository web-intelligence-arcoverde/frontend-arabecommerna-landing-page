import { COLORS } from '@/common';
import styled from 'styled-components';

export const TeacherPresentation = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 128px 96px 128px 96px;
  position: relative;
`;
export const CardImage = styled.div`
  span {
    width: 540px !important;
    height: 552px !important;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  h1 {
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: ${COLORS.gray._02};
  }
  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
    letter-spacing: 0.02em;
    color: ${COLORS.dark._04};
  }
  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: ${COLORS.gray._02};
    max-width: 612px;
  }
  span {
    color: ${COLORS.brand._02};
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
    letter-spacing: 0.02em;
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  right: 96px;
  top: 96px;
`;
