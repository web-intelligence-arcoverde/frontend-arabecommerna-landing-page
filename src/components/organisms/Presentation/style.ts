import { IMAGES } from '@/assets';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const PresentationContainer = styled.section`
  background-image: url(${IMAGES.BackgroundPresentation.src});
  background-size: cover;
  color: ${COLORS.light._05};
  text-align: center;
  height: 80vh;
  width: 100%;
  display: flex;
  padding: 128px 0px 212px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const PresentationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  h2 {
    font-size: 2.75rem;
    font-weight: 700;
  }
  p {
    font-weight: 500;
    font-size: 1.1rem;
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
  }
  button:hover {
    border: 1px solid #fdfcff8c;
    box-shadow: 0px 0px 40px rgba(122, 119, 134, 0.1);
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
  margin-top: 540px;
`;
