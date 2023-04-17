import { BREAKPOINTS } from './../../../common/index';
import { IMAGES } from '@/assets';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const PresentationContainer = styled.section`
  background-image: url(${IMAGES.BackgroundPresentation.src});
  background-position: center -65px;
  background-size: cover;
  color: ${COLORS.light._05};
  text-align: center;
  height: 100vh;
  display: flex;
  padding: 128px 0px 212px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.sm}) {
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 96px 0px 128px;
  }
`;

export const PresentationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  h2 {
    font-family: 'Raleway', sans-serif;
    max-width: 700px;
    line-height: 150%;
    flex-wrap: wrap;
    font-size: 2.75rem;
    font-weight: 700;
  }
  p:first-of-type {
    line-height: 150%;
    letter-spacing: 0.02em;
  }
  p {
    max-width: 453px;
    font-size: 1.1rem;
    line-height: 200%;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
  span {
    color: ${COLORS.auxiliary.yellow};
  }
  button {
    width: 266px;
    height: 48px;
    text-align: center;
    margin: auto;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 32px;
  }
  button:hover {
    border: 1px solid #fdfcff8c;
    box-shadow: 0px 0px 40px rgba(122, 119, 134, 0.1);
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 335px;
    button {
      font-size: 0.844rem;
      width: 335px;
      height: 48px;
    }
    h2 {
      font-family: 'Raleway';
      font-style: normal;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 200%;
      text-align: center;
    }
    p:first-of-type {
      font-size: 0.875;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export const SeeMore = styled.div`
  color: ${COLORS.gray._01};
  background: ${COLORS.light._03};
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 400;
  width: 194px;
  height: 45px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -25px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
