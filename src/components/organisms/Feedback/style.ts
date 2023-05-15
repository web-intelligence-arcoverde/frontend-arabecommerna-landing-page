import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerFeedback = styled.section`
  padding: 128px 96px;
  display: flex;
  gap: 120px;
  letter-spacing: 0.02px;

  aside {
    width: 100%;

    h4 {
      color: ${COLORS.gray._02};
      font-weight: 500;
      line-height: 21px;
      margin-bottom: 12px;
    }
    h1,
    span {
      font-family: 'Raleway';
      font-size: 2rem;
      font-weight: 700;
      line-height: 36px;
    }
    h1 {
      max-width: 306px;
      margin-bottom: 92px;
      color: ${COLORS.dark._04};
    }
    span {
      color: ${COLORS.brand._02};
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 32px;
    aside {
      h4 {
        font-size: 0.875rem;
      }
      h1,
      span {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }
`;
export const CardImage = styled.div`
  display: flex;
  span {
    padding-left: 50px;
    position: relative;
    left: 50%;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
