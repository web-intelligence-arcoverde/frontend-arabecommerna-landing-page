import { AboutCard } from './../../molecules/AboutCourse/style';
import { IMAGES } from '@/assets';
import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const MusicContainer = styled.section`
  display: flex;
  padding: 96px;
  gap: 192px;
  align-items: center;
  background: linear-gradient(0deg, rgba(8, 36, 26, 0.8), rgba(8, 36, 26, 0.8)),
    url(${IMAGES.BackgroundPrice.src});
  background-position: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 56px;
    background-position: top;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    color: ${COLORS.light._05};
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
  }
  h2,
  span {
    color: ${COLORS.light._05};
    font-family: 'raleway';
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 66px;
    width: 100%;
    max-width: 612px;
  }
  h3 {
    color: ${COLORS.light._03};
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 36px;
  }
  a {
    display: flex;
    gap: 16px;
    background: rgba(253, 252, 255, 0.1);
    border-radius: 5px;
    max-width: 312px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    padding: 8px 24px 8px 16px;
    color: ${COLORS.light._02};
    font-weight: 500;
    font-size: 1rem;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  span {
    color: ${COLORS.auxiliary.yellow};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    gap: 8px;
    h1 {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 18px;
    }
    h2,
    span {
      font-size: 1.5rem;
      line-height: 48px;
    }
    h3 {
      font-size: 1rem;
      line-height: 24px;
    }
    a {
      padding: 6px 20px 6px 12px;
      max-width: 282px;
      max-height: 40px;
      font-size: 0.875rem;
    }
  }
`;
