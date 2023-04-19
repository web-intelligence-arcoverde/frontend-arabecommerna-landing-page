import { COLORS } from '@/common';
import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 128px 96px;
`;
export const LearnContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 506px;
  max-height: 192px;
  h1 {
    font-weight: 500;
    color: ${COLORS.gray._02};
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 64px;
    color: ${COLORS.dark._04};
  }
  span {
    font-size: 2rem;
    font-weight: 700;
    line-height: 64px;
    color: ${COLORS.brand._02};
  }
`;
export const LearnDetails = styled.div`
  max-width: 617px;
  h1 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${COLORS.gray._01};
  }
  p {
    font-weight: 400;
    line-height: 32px;
    color: ${COLORS.gray._02};
  }
`;
