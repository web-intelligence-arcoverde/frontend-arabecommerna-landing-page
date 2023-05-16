import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.brand._04};
  padding: 56px 96px;
  height: 70px;
  gap: 56px;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    width: 80%;
    @media (max-width: ${BREAKPOINTS.sm}) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      width: 100%;
      gap: 32px;
    }
  }
  p,
  a,
  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 21px;
    color: ${COLORS.gray._03};
  }

  button {
    background-color: #ffffff;
    border: 1px solid #e2f1eb;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    padding: 8px;
  }
  a,
  span {
    font-weight: 500;
    color: ${COLORS.gray._02};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    align-items: center;
    height: 100%;
    padding: 32px 20px;
    Button {
      display: none;
    }
  }
`;
