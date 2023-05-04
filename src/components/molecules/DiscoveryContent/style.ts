import { BREAKPOINTS } from '@/common';
import styled from 'styled-components';

export const DiscoveryImages = styled.div`
  display: flex;
  gap: 24px;
  span {
    max-width: 294px;
    max-height: 400px;
    border-radius: 5px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 375px;
    max-height: 405px;
    gap: 4px;
    span {
      width: 185.5px !important;
      height: 200px !important;
      border-radius: none;
    }
  }
`;
