import { COLORS } from '@/common';
import styled from 'styled-components';

export const DoubtsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 128px 202px;
  letter-spacing: 0.02em;
  gap: 40px;
`;

export const DoboutTitle = styled.div`
  h1 {
    text-align: center;
    font-weight: 500;
    line-height: 24px;
    color: ${COLORS.gray._02};
  }
  h2,
  span {
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
  }
  span {
    color: ${COLORS.brand._02};
  }
`;

export const DoubtContent = styled.div`
  border: 1px solid #ecebf2;
  border-radius: 5px;
  padding: 32px;
  li {
    padding: 48px 0;
    border-bottom: 1px solid ${COLORS.light._02};
  }
  li:nth-child(4) {
    border: none;
  }
`;
