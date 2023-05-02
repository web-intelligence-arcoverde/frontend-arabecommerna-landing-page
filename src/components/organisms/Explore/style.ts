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

export const ContainerMap = styled.div`
  position: absolute;
  right: 96px;
`;
