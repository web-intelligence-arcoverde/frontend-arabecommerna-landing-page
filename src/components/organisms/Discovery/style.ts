import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const DiscoveryContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 96px;
  text-align: center;
  letter-spacing: 0.02em;
  height: 100vh;
  gap: 24px;
  p {
    color: ${COLORS.gray._02};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 36px;
    max-width: 824px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 96px 20px;
    gap: 34px;
    p {
      max-width: 335px;
      max-height: 288px;
      font-size: 1rem;
      line-height: 31px;
    }
  }
`;
export const DiscoveryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;
export const Title = styled.div`
  h1 {
    color: ${COLORS.gray._02};
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
  }
  h2,
  span {
    color: ${COLORS.dark._04};
    font-size: 2rem;
    font-weight: 700;
    line-height: 48px;
  }
  span {
    color: ${COLORS.brand._02};
  }
  width: 700px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    h1 {
      font-size: 0.875rem;
      line-height: 21px;
    }
    h2,
    span {
      font-family: 'Raleway';
      font-size: 1.5rem;
      line-height: 36px;
    }
  }
`;

export const DiscoveryImages = styled.div`
  display: flex;
  gap: 24px;
  span {
    max-width: 294px;
    max-height: 400px;
    border-radius: 5px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 375px;
    max-height: 405px;
    gap: 4px;
    span {
      width: 185.5px !important;
      height: 200px !important;
      border-radius: none;
    }
  }
`;
