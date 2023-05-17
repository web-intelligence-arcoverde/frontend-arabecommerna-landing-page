import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const DoubtsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.light._05};
  padding: 128px 202px;
  gap: 40px;
  position: relative;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 96px 20px;
    gap: 32px;
  }
`;

export const DoubtTitle = styled.div`
  h1 {
    text-align: center;
    font-weight: 500;
    line-height: 24px;
    color: ${COLORS.gray._02};
  }
  h2,
  a {
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
  }
  a {
    pointer-events: none;
    color: ${COLORS.brand._02};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    h1 {
      font-size: 0.875rem;
      line-height: 21px;
    }
    h2,
    a {
      font-size: 1.5rem;
      line-height: 36px;
    }
  }
`;

export const DoubtContent = styled.div`
  border: 1px solid #ecebf2;
  border-radius: 5px;
  padding: 32px;
  pointer-events: none;
  li {
    padding: 48px 0;
    border-bottom: 1px solid ${COLORS.light._02};
  }
  li:nth-child(4) {
    border: none;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 24px;
    width: 100%;
    pointer-events: all;
    li {
      padding: 24px 0;
      border-bottom: 1px solid ${COLORS.light._02};
    }
  }
`;
export const Grade = styled.div`
  position: absolute;
  top: 65px;
  left: 96px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const Detail = styled.div`
  position: absolute;
  right: 36px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
