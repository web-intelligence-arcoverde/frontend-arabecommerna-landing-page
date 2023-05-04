import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContentText = styled.p`
  color: ${COLORS.gray._02};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 36px;
  max-width: 824px;
  border-top: 1px solid ${COLORS.light._02};
  padding-top:16px ;

  @media (max-width: ${BREAKPOINTS.sm}) {
    max-width: 335px;
    font-size: 1rem;
    line-height: 31px;
  }
`;

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
