import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const CardButtonTab = styled.div`
  display: flex;
  max-width: 824px;
  max-height: 55px;
  gap: 24px;


  @media (max-width: ${BREAKPOINTS.sm}) {
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    gap: 4px;
    button {
      padding: 0;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;

export const StyledButton = styled.button<{ active: boolean }>`
  color: ${(props) =>
    props.active ? `${COLORS.auxiliary.blue}` : `${COLORS.gray._03}`};
  background-color: ${(props) =>
    props.active ? 'rgba(10, 103, 209, 0.05)' : 'transparent'};
  padding: 8px 24px;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
  width: 104px;
  height: 40px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 0;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 21px;
  }
`;
