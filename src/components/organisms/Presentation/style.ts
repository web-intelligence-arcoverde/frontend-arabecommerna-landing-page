
import { IMAGES } from "@/assets";
import { COLORS } from "@/common";
import styled from "styled-components";

export const PresentationContainer = styled.section`
  background-image: url(${IMAGES.BackgroundPresentation.src});
  background-size: cover;
  text-align: center;
  color: ${COLORS.light._05};
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const PresentationDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  h2 {
    font-size: 2.75rem;
    font-weight: 700;
  }
  p {
    font-weight: 500;
    font-size: 1.1rem;
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
    border: 1px solid ${COLORS.light._05};
    box-shadow: 0px 0px 40px rgba(122, 119, 134, 0.1);
  }
`;

export const SeeMore = styled.div`
  background: ${COLORS.light._03};
  border-radius: 100px;
  color: ${COLORS.gray._01};
  font-size: 0.9rem;
  font-weight: 400;
  margin: auto;
  width: 194px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
