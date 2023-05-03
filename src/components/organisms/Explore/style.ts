import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerExplore = styled.section`
  display: flex;
  padding: 96px;
  justify-content: space-between;
  background-color: #22222285;
  position: relative;
  min-height: 734px;
  h1 {
    font-weight: 500;
    color: ${COLORS.light._05};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;
