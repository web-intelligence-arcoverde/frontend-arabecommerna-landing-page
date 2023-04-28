import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerFeedback = styled.section`
  padding: 128px 96px;
  display: flex;
  gap: 120px;

  aside {
    width: 100%;

    h4 {
      color: ${COLORS.gray._02};
      font-weight: 500;
      margin-bottom: 12px;
    }
    h1 {
      color: ${COLORS.dark._04};
      font-size: 2rem;
      max-width: 306px;
      margin-bottom: 92px;
    }
    span {
      color: ${COLORS.brand._02};
      font-size: 2rem;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 32px;
    aside {
      h1 {
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
