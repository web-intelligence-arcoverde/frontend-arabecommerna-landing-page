import { BREAKPOINTS } from './../../../common/index';
import { COLORS } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  display: flex;
  background-color: ${COLORS.light._05};
  padding: 128px 96px;
  gap: 130px;

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
      line-height: 21px;
    }
    h2,
    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 48px;
    }
  }
`;
export const LearnDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 612px;
  gap: 48px 0;
  h1 {
    color: ${COLORS.gray._01};
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 27px;
  }
  p {
    max-width: 516px;
    max-height: 96px;
    color: ${COLORS.gray._02};
    font-weight: 400;
    line-height: 32px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    h1 {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const ContainerImage = styled(Image)`
  width: 56px !important;
  height: 56px !important;
`;
