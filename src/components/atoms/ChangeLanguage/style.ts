import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerSelect = styled.div`
  min-width: 120px;


  @media (max-width: 769px) {
    width: 80%;
    padding: 0 10px;
  }
`;

export const CardSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${COLORS.gray._03};
  font-weight: 500;
  height: 36px;
  span {
    font-size: 14px;
    padding-left: 10px;
  }
  text-transform: uppercase;
  img {
    width: 20px;
    display: none;
  }
`;
