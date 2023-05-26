import { Button } from './../../atoms/Button/index';
import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: solid 1px ${COLORS.light._02};
  padding: 32px;
  min-height: 400px;
  min-width: 312px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    min-width: 260px;
  }
  
`;

export const CardIcon = styled.div`
  border-radius: 5px;
  border: solid 1px ${COLORS.light._02};
  padding: 8px 12px;
`;

export const DescriptionModule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-weight: 500;
    color: ${COLORS.gray._02};
    font-size: 1.125rem;
  }
  p {
    color: ${COLORS.gray._02};
    line-height: 28px;
  }
  button {
    width: max-content;
    border: none;
    background-color: transparent;
    color: ${COLORS.auxiliary.blue};
    text-transform: lowercase;
  }
`;
