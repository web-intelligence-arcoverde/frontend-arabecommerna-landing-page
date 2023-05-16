import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 128px 96px;
  align-items: center;
  gap: 96px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 0;
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
      object-fit: fill;
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
  }
  h2 {
      font-family: 'raleway';
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

  p {
    color: ${COLORS.gray._02};
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 36px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 56px 20px;
    order: 2;
    gap: 0;
    h1 {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;
    }
    h2,
    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 48px;
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
  }
  h1 {
    color: ${COLORS.gray._01};
    font-weight: 500;
  }
  p {
    color: ${COLORS.gray._02};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 32px;
    padding: 32px 0;
    span {
      width: 24px !important;
      height: 24px !important;
    }
  }
`;
