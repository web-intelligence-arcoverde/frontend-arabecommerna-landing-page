import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerPrice = styled.section`
  display: flex;
  padding: 96px;
  gap: 192px;
  background-color: #222;
  h1 {
    max-width: 550px;
    color: ${COLORS.light._05};
    font-size: 2rem;
    line-height: 64px;
    font-weight: 600;
    span {
      color: ${COLORS.auxiliary.yellow};
      font-size: 2rem;
      line-height: 64px;
    }
  }
`;
