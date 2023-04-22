import { BREAKPOINTS } from './../../../common/index';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  display: flex;
  padding: 128px 96px;
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
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.02em;
    }
  }
`;
export const LearnContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 506px;
  max-height: 192px;
  h1 {
    font-weight: 500;
    color: ${COLORS.gray._02};
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
      line-height: 21px;
    }
    h2,
    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 48px;
    }
    element.style {
      display: none;
    }
  }
`;
export const LearnDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h1 {
    color: ${COLORS.gray._01};
    font-size: 1.125rem;
    font-weight: 500;
  }
  p {
    width: 516px;
    height: 96px;
    color: ${COLORS.gray._02};
    font-weight: 400;
    line-height: 32px;
    line-height: 200%;
    letter-spacing: 0.02em;
  }
`;
