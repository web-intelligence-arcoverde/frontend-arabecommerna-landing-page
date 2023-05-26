import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 128px 0 128px 96px;

  h6 {
    color: ${COLORS.gray._02};
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 2rem;
    color: ${COLORS.dark._04};
    font-family: 'Raleway';
    span {
      color: ${COLORS.brand._02};
      font-size: 2rem;
      font-family: 'Raleway';
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 96px 0 96px 20px;

    h1 {
      font-size: 24px;
      width: 100%;
      span {
        font-size: 24px;
      }
    }
  }
`;
export const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  padding-right: 96px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding-right: 20px;
  }
`;

export const CardButtons = styled.div`
  display: flex;

  button {
    color: ${COLORS.gray._04};
    height: 40px;
    background-color: transparent;
    border: solid 1px ${COLORS.light._02};
    padding: 10px 20px;
    border-radius: 5px;
    :nth-child(even) {
      border-radius: 0px;
      border-left: none;
      border-right: none;
    }
    :first-child {
      border-radius: 5px 0 0 5px;
    }
    :last-child {
      border-radius: 0 5px 5px 0;
    }
  }
  #active {
    color: ${COLORS.auxiliary.blue};
    font-weight: 600;
    background-color: rgba(10, 103, 209, 0.05);
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    margin-top: 20px;
    button {
      font-size: 12px;
      padding: 10px;
      width: 100%;
    }
  }
`;

export const AllModule = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 4px;
  }
`;
