import { BREAKPOINTS } from './../../../common/index';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  display: flex;
  background-color: ${COLORS.light._05};
  padding: 128px 96px;
  position: relative;
  gap: 130px;
  background-color: ${COLORS.light._05};

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 96px 20px;
    gap: 56px;
    p {
      font-weight: 400;
      font-size: 1rem;
      line-height: 32px;
      letter-spacing: 0.02em;
    }
  }
`;
export const LearnContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 506px;
  h1 {
    font-weight: 500;
    color: ${COLORS.gray._02};
    line-height: 24px;
  }
  h2,
  span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 64px;
    color: ${COLORS.dark._04};
  }
  span {
    color: ${COLORS.brand._02};
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    h1 {
      font-weight: 500;
      font-size: 1rem;
      line-height: 25px;
    }
    h2,
    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 48px;
    }
  }
`;
export const CardImage = styled.div`
  position: absolute;
  bottom: 50px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  li {
    :nth-child(2) {
      padding: 48px 0;
      border-top: 1px solid ${COLORS.light._02};
      border-bottom: 1px solid ${COLORS.light._02};
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 32px;
    li {
      :nth-child(2) {
        border-top: 1px solid ${COLORS.light._02};
        border-bottom: 1px solid ${COLORS.light._02};
      }
    }
  }
`;
