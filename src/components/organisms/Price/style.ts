import { IMAGES } from '@/assets';
import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerPrice = styled.section`
  display: flex;
  padding: 96px;
  gap: 192px;
  align-items: center;
  background: linear-gradient(0deg, rgba(8, 36, 26, 0.8), rgba(8, 36, 26, 0.8)),
    url(${IMAGES.BackgroundPrice.src});
  background-position: center;
  letter-spacing: 0.02px;

  p {
    width: 100%;
    max-width: 550px;
    height: 100%;
    color: ${COLORS.light._05};
    font-family: 'raleway';
    font-size: 2rem;
    line-height: 64px;
    font-weight: 700;
    span {
      color: ${COLORS.auxiliary.yellow};
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 56px;
    background-position: top;
  }
  p {
    font-size: 1.5rem;
    span {
      font-size: 1.5rem;
    }
  }
`;
