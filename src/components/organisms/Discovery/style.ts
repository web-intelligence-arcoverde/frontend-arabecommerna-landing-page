import { COLORS } from '@/common';
import styled from 'styled-components';

export const DiscoveryContent = styled.section`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
  padding: 128px 96px;
  letter-spacing: 0.03em;
  text-align: center;
  h2,
  span {
    color: ${COLORS.dark._04};
    font-size: 2rem;
    font-weight: 700;
    line-height: 48px;
  }
  span {
    color: ${COLORS.brand._02};
  }
  p {
    color: ${COLORS.gray._02};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 36px;
    max-width: 824px;
    max-height: 144px;
  }
`;
export const DiscoveryTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: ${COLORS.gray._02};
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
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
`;
