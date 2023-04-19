import { BREAKPOINTS } from './../../../common/index';
import { IMAGES } from '@/assets';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const PresentationContainer = styled.section`
  background-image: url(${IMAGES.BackgroundPresentation.src});
  background-position: center -220px;
  background-size: cover;
  color: ${COLORS.light._05};
  text-align: center;
  display: flex;
  padding: 128px 0px 212px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 88vh;
  position: relative;
  @media (max-width: ${BREAKPOINTS.sm}) {
    background-position: center;
    width: 100%;
    padding: 96px 20px 128px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.875rem;
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
    font-size: 2.75rem;
    font-weight: 700;
    width: 100%;
  
  }

  p {
    max-width: 460px;
    font-size: 1.125rem;
    line-height: 200%;
    font-weight: 500;
    width: 80%;
  }
  span {
    max-width: 700px;
    line-height: 150%;
    font-size: 2.75rem;
    font-weight: 700;
    color: ${COLORS.auxiliary.yellow};
  }
  button {
    width: 266px;
    height: 48px;
    text-align: center;
    margin-top: 32px;
  }
  button:hover {
    border: 1px solid #fdfcff8c;
    box-shadow: 0px 0px 40px rgba(122, 119, 134, 0.1);
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 100%;
    button {
      font-size: 0.844rem;
      width: 100%;
      height: 48px;
    }
    h2 {
      font-family: 'Raleway',;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 200%;
      text-align: center;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }
    span {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }
`;
