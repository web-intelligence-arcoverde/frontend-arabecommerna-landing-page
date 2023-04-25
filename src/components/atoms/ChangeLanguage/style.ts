import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerSelect = styled.div`
  min-width: 110px;
  
  .css-1s2u09g-control {
    border: solid 1px ${COLORS.light._02} !important;
    cursor: pointer ;
  }
  .css-tlfecz-indicatorContainer{
   color: ${COLORS.gray._03};
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  .css-1pahdxg-control{
    border: solid 1px ${COLORS.brand._03};
    box-shadow: none;
  }
  .css-1pahdxg-control:hover{
    border: solid 1px ${COLORS.brand._03};
  }

  @media (max-width: 769px) {
    width: 70%;
    padding: 0;
    min-width: 0;
  }
  .css-1s2u09g-control {
  width: 100%;
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
    cursor: pointer;
  }
  text-transform: uppercase;
  img {
    width: 20px;
    display: none;
  }
`;
