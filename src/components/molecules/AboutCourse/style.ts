import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 128px 96px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
export const AboutImage = styled.div`
  span {
    max-width: 540px;
    max-height: 672px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    order: 1;
    span {
      max-width: 375px !important;
      max-height: 350px !important;
    }
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 612px;
  gap: 12px;
  h1 {
    color: ${COLORS.gray._02};
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
  }
  h2,
  span {
    color: ${COLORS.dark._04};
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
    letter-spacing: 0.02em;
  }
  span {
    color: ${COLORS.brand._02};
  }

  p {
    color: ${COLORS.gray._02};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 36px;
    letter-spacing: 0.02em;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 56px 20px;
    order: 2;
    h1 {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;
      letter-spacing: 0.02em;
    }
    h2,
    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 48px;
      letter-spacing: 0.02em;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 60px 0;
  h1,
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.02em;
  }
  h1 {
    color: ${COLORS.gray._01};
    font-weight: 500;
  }
  p {
    color: ${COLORS.gray._02};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    span {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;
