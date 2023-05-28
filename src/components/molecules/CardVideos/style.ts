import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ResultsVideos = styled.div`
  display: flex;
  gap: 24px;
`;
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: solid 1px #ecebf2;
  border-radius: 5px;
  text-align: left;
  video {
    max-width: 350px;
    width: 100%;
    max-height: 450px;
    height: 100%;
    min-width: 240px;
  }
`;
export const StudentInfos = styled.div`
  padding: 18px;
  h2 {
    color: ${COLORS.gray._02};
    font-weight: 500;
    font-size: 1.175rem;
    line-height: 27px;
  }
  p {
    margin-top: 8px;
    color: ${COLORS.gray._03};
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }
`;

export const CardImage = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
  }
  span{
    width: 300px;
    height: 400px;
  }
  @media(max-width:${BREAKPOINTS.sm}){
    min-width: 240px !important;
   
  }
`;
