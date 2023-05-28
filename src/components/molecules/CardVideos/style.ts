import { COLORS } from '@/common';
import styled from 'styled-components';

export const ResultsVideos = styled.div`
  display: flex;
  gap: 24px;
`;
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 350px;
  width: 100%;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #ecebf2;
  border-radius: 0px 0px 5px 5px;
  text-align: left;
  video {
    max-width: 350px;
    width: 100%;
    max-height: 450px;
    height: 100%;
    border-radius: 5px 5px 0px 0px;
  }
  span {
    max-width: 350px !important;
    max-height: 450px !important;
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
