import { COLORS } from '@/common';
import styled from 'styled-components';

export const DoubtsContent = styled.div`
  align-items: center;
  font-style: normal;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.02em;
  max-width: 1036px;
  max-height: 496px;
  h1,
  h2 {
    font-weight: 400;
    color: ${COLORS.gray._04};
  }

  h2,
  p {
    width: 920px;
    height: 24px;
  }
  h1 {
    max-width: 20px;
    max-height: 24px;
  }
  p {
    margin-top: 12px;
    font-weight: 500;
    color: ${COLORS.gray._02};
  }
`;
export const DoubtsText = styled.div`
  display: flex;
  gap: 32px;
`;
