import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const CardSeeMore = styled.div`
  color: ${COLORS.gray._01};
  background: ${COLORS.light._03};
  border-radius: 100px;
  font-size: 0.9rem;
  width: 194px;
  height: 46px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -23px;
  z-index: 10;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
