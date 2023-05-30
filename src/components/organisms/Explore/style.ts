import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '@/common';

export const ContainerExplore = styled.section`
  display: flex;
  padding: 96px;
  justify-content: space-between;
  min-height: 734px;
  position: relative;
  overflow: hidden;
 
  h1 {
    font-weight: 500;
    color: ${COLORS.light._05};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
export const CardBackground = styled.div`
position: absolute;
left: 0;
top: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
`;

export const ContainerMap = styled.div`
  position: absolute;
  right: 96px;
`;

export const ButtonClick = styled.button<{
  positionX: number;
  positionY: number;
}>`
  position: absolute;
  right: ${(props) => props.positionX && `${props.positionX}%`};
  top: ${(props) => props.positionY && `${props.positionY}%`};
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  z-index:20;
`;

