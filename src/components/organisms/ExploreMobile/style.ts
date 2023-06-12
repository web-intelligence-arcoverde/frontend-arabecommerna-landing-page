import { BREAKPOINTS, COLORS } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const ExploreContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  display: none;

  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
  }
`;

export const Explore = styled.div`
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    overflow: auto;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: 110px;
    padding: 20px;
    gap: 20px;
    background: rgb(23 67 66) 40%;
    h1 {
      color: ${COLORS.light._05};
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;
export const CardButton = styled.div`
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    gap: 24px;
    button {
      border: none;
      background: transparent;
      span {
        min-width: 25px;
        min-height: 25px;
        max-width: 30px;
        max-height: 30px;
        pointer-events: none;
      }
    }
    button:hover {
      border-bottom: 1.5px solid #f3f9f7;
    }
  }
`;

export const CardText = styled.div`
  @media (max-width: ${BREAKPOINTS.sm}) {
    position: relative;
    padding-top: 180px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 600px;
  
  
  img {
    width: 190% !important;
    height: auto !important;
    min-width: none !important;
    max-width: none !important;
    min-height: none !important;
  }
  `
