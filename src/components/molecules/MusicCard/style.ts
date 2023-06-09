import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 128px;
  max-width: 416px;
  max-height: 367px;
  background: #ffffff;
  border: 1px solid #f6f5fa;
  border-radius: 5px 0px 0px 5px;
`;
export const CardIcon = styled.div`
  background: #ffffff;
  padding: 16px;
  border: 1px solid #f6f5fa;
  border-radius: 5px;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h1 {
    color: ${COLORS.gray._01};
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 27px;
  }
  p {
    color: ${COLORS.gray._02};
    font-weight: 400;
    font-size: 1rem;
    line-height: 23px;
  }
`;
