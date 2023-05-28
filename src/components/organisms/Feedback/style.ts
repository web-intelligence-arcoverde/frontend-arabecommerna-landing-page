import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerFeedback = styled.section`
  padding: 128px 96px;
  display: flex;
  gap: 120px;

  aside {
    width: 100%;
    min-width: 305px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 32px;
  }
`;
export const CardImage = styled.div`
  display: flex;
  margin-top: 100px;
  span {
    padding-left: 50px;
    position: relative;
    left: 50%;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
